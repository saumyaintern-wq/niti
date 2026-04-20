"use client";

import Container from "@/components/ui/Container";
import {
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer">

      <Container>
        <div className="footer-inner">

          {/* LEFT */}
          <div className="footer-left">
            <p className="footer-brand">Nitisetu AI</p>

            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Safety & Security</a>
              <a href="#">Captions on Web Terms</a>
              <a href="#">Captions on Web User Terms</a>
              <a href="#">Captions Terms</a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="footer-right">

            <p className="footer-tagline">
              Detect. Understand. Predict.
            </p>

            <div className="social-icons">

              <a href="#" target="_blank">
                <FaXTwitter size={16} />
              </a>

              <a href="#" target="_blank">
                <FaLinkedinIn size={16} />
              </a>

              <a href="#" target="_blank">
                <FaYoutube size={16} />
              </a>

              <a href="#" target="_blank">
                <FaInstagram size={16} />
              </a>

            </div>

          </div>

        </div>
      </Container>

    </footer>
  );
}