//our-domain.com/new-meetup
import { Fragment } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import NewMeetupForm from "@/components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    //SEND A REQUEST TO OUR API ROUTE
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    console.log(data);

    router.push("/");
  }
  return (
    <Fragment>
      <Head>
        <title> Meetups|Add New Meetup</title>
        <meta
          name="description"
          content="Add your own Meetups!"
        />
      </Head>
      return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
    </Fragment>
  );

  //addMeetupHandler function should
}

export default NewMeetupPage;
