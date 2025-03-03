import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { createNewEvent } from "../../util/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import { queryClient } from '../../util/http.js'

export default function NewEvent() {
  const navigate = useNavigate();

  // unlike useQuery does not automatically send this request when this component here is rendered but instead only when you tell it to send that request,
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: createNewEvent,
    onSuccess: () => {
      // It in the end tells React Query that the data fetched by certain queries is outdated now, that it should be marked as stale and that an immediate refetch should be triggered
      queryClient.invalidateQueries({queryKey: ['events']})
      navigate('/events')
    }
  });

  function handleSubmit(formData) {
    mutate({ event: formData });
    // navigate('/events');
  }

  return (
    <Modal onClose={() => navigate("../")}>
      <EventForm onSubmit={handleSubmit}>
        {isPending && "Submitting..."}
        {!isPending && (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Create
            </button>
          </>
        )}
      </EventForm>
      {isError && (
        <ErrorBlock
          title="Failed to create event."
          message={
            error.info?.message ||
            "Failed to create event. Please check your inputs and try again later."
          }
        />
      )}
    </Modal>
  );
}
