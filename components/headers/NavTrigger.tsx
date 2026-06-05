"use client";

import CommonLoadAnimation, {
  CommonLoadFade,
} from "@/components/animations/CommonLoadAnimation";
import { Menu, Close } from "pixelarticons/react";
import TextScramble from "@/components/animations/TextScramble";

type NavTriggerProps = {
  setToggleNode: (el: HTMLDivElement | null) => void;
  setHamburgerNode: (el: HTMLElement | null) => void;
};

export default function NavTrigger({
  setToggleNode,
  setHamburgerNode,
}: NavTriggerProps) {
  return (
    <CommonLoadAnimation>
      <CommonLoadFade index={0}>
        <div className="mxd-menu__contain loading-fade">
          <div className="mxd-menu__toggle" ref={setToggleNode}>
            <button
              type="button"
              className="mxd-menu__hamburger"
              aria-label="Menu"
              aria-expanded="false"
              ref={setHamburgerNode}
            >
              <TextScramble className="hamburger-label hamburger-menu-label">Menu</TextScramble>
              <Menu className="hamburger-icon hamburger-menu-icon" aria-hidden="true" />
              <TextScramble className="hamburger-label hamburger-close-label">Close</TextScramble>
              <Close className="hamburger-icon hamburger-close-icon" aria-hidden="true" />
            </button>
          </div>
        </div>
      </CommonLoadFade>
    </CommonLoadAnimation>
  );
}
