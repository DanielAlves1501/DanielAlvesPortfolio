import Form from "./Form";
const Contact = () => {
  const handleSubmit = async (formData) => {
    "use server";

    try {
      const req = await fetch("http://147.79.107.190:3001/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const res = await req.json();

      if (res.errorMessage) {
        throw new Error(res.errorMessage);
      }

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="container pt-[100px]">
      <h2 className="title text-center">
        Let's <span className="text-secondary"> get in touch!</span>
      </h2>
      <Form handleSubmit={handleSubmit} />
    </section>
  );
};

export default Contact;
