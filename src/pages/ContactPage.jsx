import ContactForm from "../components/ContactForm";

function ContactPage() {
  return (
    <div>
      <div className="w-full h-screen absolute top-0 left-0 bg-gradient-to-t from-white to-sky-700 -z-10" />
      <div className="w-full h-[250px] relative flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 z-0 gap-1">
        <h3 className="font-bold text-4xl text-white">Contact us</h3>
        <h4 className="text-lg font-medium text-white">
          Don't be a stranger just say hello.
        </h4>
        <p className="text-white text-sm">
          Thank you for your interest in our services. Please fill out the form
          below or e-mail us at example@gmail.com
        </p>
      </div>
      <ContactForm />
    </div>
  );
}

export default ContactPage;
