import Link from 'next/link';
import { forwardRef } from 'react';

const Contact = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref}>
      <p className="typo-subheadline text-secondary-3">Get In Touch</p>

      <div className="mt-8">
        <p className="typo-body text-secondary-1">
          Feel free to reach out if you want to talk about anything!
          <br />
          I&apos;ll try my best to get back to you!
        </p>
        <Link href="mailto:huonghk.uit@gmail.com">
          <button className="px-3.5 py-2.5 rounded-lg bg-accent-1 hover:bg-accent-2 typo-body text-primary-1  mt-2">
            Say Hello
          </button>
        </Link>
      </div>
    </div>
  );
});

Contact.displayName = 'Contact';

export default Contact;
