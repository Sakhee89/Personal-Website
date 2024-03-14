export function ContactMe({ show }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_4y3rif7",
        "template_rhx6iry",
        formRef.current,
        "lrkxoAy4k-IxueFdQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setIsSuccess(true);
  };

  return (
    <section className="text-center mt-10 flex justify-center pb-10">
      {show && (
        <div className="right">
          <form ref={formRef} onSubmit={handleSubmit} className="form">
            <label for="name">HEY THE KIET, MY NAME IS</label>
            <br />
            <input type="text" name="name" />
            <br />
            <label for="email">MY EMAIL ADDRESS IS</label>
            <br />
            <input type="text" name="email" />
            <br />
            <label for="message">MY MESSAGE TO YOU</label>
            <br />
            <textarea type="text" name="message" rows="5" />
            <br />
            <label for="from">I HEARD ABOUT YOU FROM</label>
            <br />
            <input type="text" name="from" />
            <br />
            <button>SEND MESSAGE</button>
            <div
              className={`submit-successful ${isSuccess ? "show" : ""}`}
              ref={successRef}
            >
              <BsCheckCircleFill className="icon" />
              <p>Your message has been sent completely.</p>
            </div>
          </form>
        </div>
      )}
    </section>
  );
}
