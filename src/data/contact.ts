import type { ContactDetails } from "../types/contact";

export const contact: ContactDetails = {
  email: "sabi.j.fernan@gmail.com",
  locations: ["Melbourne, Australia", "Cebu, Philippines"],
  phoneNumbers: [
    {
      label: "Australia",
      display: "+61 422 264 066",
      href: "tel:+61422264066",
    },
    {
      label: "Philippines",
      display: "+63 917 580 0561",
      href: "tel:+639175800561",
    },
  ],
};
