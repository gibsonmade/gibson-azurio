"use client";

import Image from "next/image";
import {
  CommonGravityContainer,
  CommonGravityObject,
} from "@/components/animations/CommonGravitySection";

export default function CommonGravityPortfolioObjects() {
  return (
    <CommonGravityContainer>
      <div className="mxd-promo__objects object-container">
        <CommonGravityObject index={0}>
          <div className="object object-image">
            <Image
              alt="Gibsooon Gravity Image"
              src="/img-temp/uploads/case-study/homedepot/ux+portfolio+-+home+depot.jpg"
              width={469}
              height={600}
            />
          </div>
        </CommonGravityObject>
        <CommonGravityObject index={1}>
          <div className="object object-type">
            <p>Web</p>
          </div>
        </CommonGravityObject>
        <CommonGravityObject index={2}>
          <div className="object object-image">
            <Image
              alt="Gibsooon Gravity Image"
              src="/img-temp/uploads/case-study/carmax/gibson-cars.jpg"
              width={454}
              height={600}
            />
          </div>
        </CommonGravityObject>
        <CommonGravityObject index={3}>
          <div className="object object-type">
            <p>IU/UX</p>
          </div>
        </CommonGravityObject>
        <CommonGravityObject index={4}>
          <div className="object object-image">
            <Image
              alt="Gibsooon Gravity Image"
              src="/img-temp/uploads/case-study/minimurals/MiniMural Houston Website - HD.png"
              width={442}
              height={570}
            />
          </div>
        </CommonGravityObject>
        <CommonGravityObject index={5}>
          <div className="object object-type">
            <p>Apps</p>
          </div>
        </CommonGravityObject>
        <CommonGravityObject index={6}>
          <div className="object object-image">
            <Image
              alt="Gibsooon Gravity Image"
              src="/img-temp/uploads/case-study/staterra/Stationery1.jpg"
              width={431}
              height={600}
            />
          </div>
        </CommonGravityObject>
        <CommonGravityObject index={7}>
          <div className="object object-type">
            <p>Print</p>
          </div>
        </CommonGravityObject>
        <CommonGravityObject index={8}>
          <div className="object object-image">
            <Image
              alt="Gibsooon Gravity Image"
              src="/img-temp/uploads/case-study/wiab/gibson-robot.jpg"
              width={400}
              height={521}
            />
          </div>
        </CommonGravityObject>
        <CommonGravityObject index={9}>
          <div className="object object-type">
            <p>Brands</p>
          </div>
        </CommonGravityObject>
        <CommonGravityObject index={10}>
          <div className="object object-image">
            <Image
              alt="Gibsooon Gravity Image"
              src="/img-temp/uploads/case-study/cactus-club/gibson-cactus.jpg"
              width={400}
              height={520}
            />
          </div>
        </CommonGravityObject>
        <CommonGravityObject index={11}>
          <div className="object object-type">
            <p>Motion</p>
          </div>
        </CommonGravityObject>
      </div>
    </CommonGravityContainer>
  );
}
