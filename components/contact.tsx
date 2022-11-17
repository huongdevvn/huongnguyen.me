import Link from 'next/link';

const Contact = () => {
  return (
    <section id="contact">
      <p className="typo-subheadline text-secondary-3">Get In Touch</p>

      <div className="mt-8">
        <p className="typo-body text-secondary-1">
          Feel free to reach out if you want to talk about anything! 😎
        </p>
        <Link href="mailto:huonghk.uit@gmail.com">
          <p className="text-secondary-4 hover:text-secondary-3 hover:underline typo-body">
            huonghk.uit@gmail.com
          </p>
        </Link>
      </div>
    </section>
  );
};

export default Contact;
