import EnjoyablePlace from "../components/EnjoyablePlace/EnjoyablePlace";
import Footer from "../components/Footer/Footer,";
import Hero from "../components/Hero/Hero";
import HighlightsMenu from "../components/HighlightsMenu/HighlightsMenu";
import LocallyPlace from "../components/LocallyPlace/LocallyPlace";
import ReservationBottomLink from "../components/ReservationBottomLink/ReservationBottomLink";

import Special from "../components/Special/Special";

export default function SpecialPage( ) {
    return (
        <div>
            <Hero />
            <EnjoyablePlace />
            <LocallyPlace />
            <HighlightsMenu />
            <Special />
            <ReservationBottomLink />
            <Footer />
        </div>
    )
}