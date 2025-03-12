import NewMeetupForm from "../../components/meetups/NewMeetupForm";
// import Layout from "../../components/layout/Layout";

function NewMeetupPage() {
  async function addMeetupHandler(meetupData) {
    const response = await fetch("api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await response.json();
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;
