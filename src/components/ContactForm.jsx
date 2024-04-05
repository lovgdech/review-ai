import { Mail, Phone, MapPin, Send } from "lucide-react";

import { Button } from "@/components/ui/button";

function ContactForm() {
  return (
    <div className="w-full text-gray-300 bg-[#2e0249] py-10">
      <div className="w-full max-w-screen-xl mx-auto p-4 sm:p-6 lg:p-8 flex gap-6 justify-between flex-wrap">
        <div className="flex-1 flex flex-col gap-4">
          <h3 className="text-4xl font-bold">
            Let's discuss on something{" "}
            <span className="text-[#A91079]">cool</span> together
          </h3>
          <ul className="w-full flex flex-col gap-2">
            <li className="flex items-center gap-2 p-2">
              <Mail className="text-[#A91079]" size={20} />
              <p>example@gmail.com</p>
            </li>

            <li className="flex items-center gap-2 p-2 bg-[#60224c] rounded-md border border-[#A91079]">
              <Phone className="text-[#A91079]" size={20} />
              <p>+123456789</p>
            </li>
            <li className="flex items-center gap-2 p-2">
              <MapPin className="text-[#A91079]" size={20} />
              <p>123 Street 456 House</p>
            </li>
          </ul>
          <iframe
            className="flex-1 min-h-[280px] rounded-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.058148786534!2d106.3914611095238!3d21.11024778047848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31357909df4b3bff%3A0xd8784721e55d91ca!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBTYW8gxJDhu48!5e0!3m2!1svi!2s!4v1712282607206!5m2!1svi!2s"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <form className="w-full min-w-[500px] flex-1 h-full flex flex-col gap-4 bg-white rounded-md shadow-md p-4 flex-shrink-0">
          <p className="text-black">i'm interested in...</p>
          <div className="flex items-center gap-2 flex-wrap mb-6">
            <Button type="button">UI/UX design</Button>
            <Button type="button">Web design</Button>
            <Button type="button">Education</Button>
            <Button type="button">Technology</Button>
            <Button type="button">News tech</Button>
            <Button type="button">Teacher</Button>
            <Button type="button">Other</Button>
          </div>
          <input
            className="border-b text-black h-10 px-4 border-[#A91079] outline-none focus:bg-gray-100 rounded-md placeholder:text-gray-700"
            type="text"
            placeholder="Your name..."
          />
          <input
            className="border-b text-black h-10 px-4 border-[#A91079] outline-none focus:bg-gray-100 rounded-md placeholder:text-gray-700"
            type="email"
            placeholder="Your email address..."
          />
          <textarea
            className="border text-black px-4 py-2 border-[#A91079] outline-none focus:bg-gray-100 rounded-md placeholder:text-gray-700"
            placeholder="Your message..."
            rows={7}
          />

          <Button className="flex items-center mt-6 gap-2 w-max px-5 h-12 bg-[#A91079] hover:bg-[#cb008b]">
            <Send size="20" />
            <p>Send message</p>
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
