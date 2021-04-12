import React, { useState, SyntheticEvent } from "react";
import classNames from "classnames";

import ReferenceItem from "../components/ReferenceItem";

const References = () => {
    const [barPosClass, setBarPosClass] = useState(
        classNames("default-bar-pos")
    );

    const [barPos, setBarPos] = useState(true);

    const [itemAnimation, setItemAnimation] = useState(0);

    const handleItemClick = async () => {
        setItemAnimation(1);

        await sleep(250);

        if (!barPos) {
            setBarPosClass(classNames("default-bar-pos"));
        } else if (barPos) {
            setBarPosClass(classNames("side-bar-pos"));
        }

        setBarPos(!barPos);
    };

    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    return (
        <section id="references">
            <h2 id="references__header">References</h2>

            <div id="references__content">
                <ul
                    className={barPosClass}
                    id="references__content--bar-main"
                    onAnimationEnd={() => setItemAnimation(0)}
                    animation={itemAnimation}
                >
                    <ReferenceItem onItemClick={handleItemClick}></ReferenceItem>
                    <ReferenceItem onItemClick={handleItemClick}></ReferenceItem>
                    <ReferenceItem onItemClick={handleItemClick}></ReferenceItem>
                </ul>

                <div id="references__content--bar-side">
                    <div id="bar-side__content"></div>
                </div>
            </div>
        </section>
    );
};

export default References;
