import Link from "next/link";
import Image from "next/image";

import { brand } from "@/brand";
import Faq from "@/components/templates/faq";
import { getMenuLinksByGroup } from "@/lib/fetchs";
import Breadcrumbs from "@/components/modules/breadcrumbs";
import ContactUsForm from "@/components/templates/contactUsForm";

async function ContactUsPage() {
  const contactUs = await getMenuLinksByGroup({ groupnames: "contact-us" });

  return (
    <>
      <Breadcrumbs links={[{ name: "ارتباط با ما", href: "/contact-us" }]} />

      <ContactUsForm />

      <div className="wrapper f-center flex-col mt-24 lg:mt-40">
        <h2 className="heading text-center">
          ارتباط با ما{" "}
          <span className="text-primary">تضمین ایمنی کسب و کار</span> شماست...
        </h2>
        <p className="mt-6 text-center">
          هدف ما ایجاد محیطی مطمئن برای کاربران و اعتماد بلندمدت به خدمات و محصولاتمان است.
        </p>
        <div className="grid grid-cols-2 mt-6 gap-3">
          {contactUs.result?.data?.map((item) => (
            <Link
              key={item.id}
              href={item.linkUrl || ""}
              className="card border border-primary flex justify-center items-center flex-col gap-3"
            >
              <Image
                width={48}
                height={48}
                alt={item.name || ""}
                src={brand.apiBaseUrl + (item.imageUrl || "")}
              />
              <span className="title">{item.name}</span>
              <p className="text-center max-lg:text-sm">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>

      <Faq />
    </>
  );
}

export default ContactUsPage;
