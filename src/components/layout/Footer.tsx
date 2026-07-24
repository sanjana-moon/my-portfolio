import Container from "@/components/common/Container";
import SocialLinks from "@/components/common/SocialLinks";

import personal from "@/data/personal";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <h3 className="font-heading text-xl font-bold text-heading">
              {personal.name}
            </h3>

            <p className="mt-2 text-sm text-text">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <SocialLinks />
        </div>
      </Container>
    </footer>
  );
}