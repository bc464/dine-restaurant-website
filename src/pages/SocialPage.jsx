import EnjoyablePlace from "../components/EnjoyablePlace/EnjoyablePlace";
import Footer from "../components/Footer/Footer,";
import Hero from "../components/Hero/Hero";
import HighlightsMenu from "../components/HighlightsMenu/HighlightsMenu";
import LocallyPlace from "../components/LocallyPlace/LocallyPlace";
import ReservationBottomLink from "../components/ReservationBottomLink/ReservationBottomLink";
import Social from "../components/Social/Social";

export default function SocialPage( ) {
    return (
        <div>
            <Hero />
            <EnjoyablePlace />
            <LocallyPlace />
            <HighlightsMenu />
            <Social />
            <ReservationBottomLink />
            <Footer />
        </div>
    )
}