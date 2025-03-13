import { FiMail, FiPhone, FiSend } from "react-icons/fi";

export default function ContactSection() {
  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-center text-2xl font-medium text-[#0a3b36] mb-8">
          Here are some other ways
          <br />
          of getting in touch
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="flex items-center gap-3">
            <div className="bg-[#0a3b36] rounded-full p-3">
              <FiMail className="h-5 w-5 text-white" />
            </div>
            <a
              href="mailto:hello@foodconnectgroup.com"
              className="text-[#0a3b36] hover:underline font-medium"
            >
              hello@foodconnectgroup.com
            </a>
          </div>

          <div className="hidden md:block w-px h-8 bg-gray-300 mx-4"></div>

          <div className="flex items-center gap-3">
            <div className="bg-[#0a3b36] rounded-full p-3">
              <FiPhone className="h-5 w-5 text-white" />
            </div>
            <a
              href="tel:(484)483-6631"
              className="text-[#0a3b36] hover:underline font-medium"
            >
              (484) 483-6631
            </a>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-gray-200 mb-16"></div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-start gap-4">
              <div className="text-[#0a3b36] mt-1">
                <FiSend className="h-8 w-8 transform rotate-[-45deg]" />
              </div>
              <div>
                <h2 className="text-3xl font-medium text-[#0a3b36] mb-4">
                  Join Our Community!
                </h2>
                <p className="text-gray-700">
                  Get the latest updates on food rescue efforts, community
                  impact, and ways to get involved
                </p>
              </div>
            </div>
          </div>

          <div>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0a3b36] focus:border-[#0a3b36]"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0a3b36] focus:border-[#0a3b36]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your email address <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0a3b36] focus:border-[#0a3b36]"
                />
              </div>

              <p className="text-sm text-gray-500">
                We won't send any spam, promise!
              </p>

              <button
                type="submit"
                className="bg-[#2a8572] hover:bg-[#1e6354] text-white font-medium px-6 py-2 rounded transition-colors duration-200"
              >
                Sign me up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
