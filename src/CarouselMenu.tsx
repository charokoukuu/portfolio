import Carousel from "react-material-ui-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
export const CarouselMenu = (props: { image: Array<string> }) => {
    return (
        <Carousel
            navButtonsAlwaysVisible={true}
            indicatorIconButtonProps={{
                style: {
                    padding: '0 15px',
                }
            }}
            indicatorContainerProps={{
                style: {
                    margin: "3px 0px 0px 0px"
                }
            }}
            navButtonsWrapperProps={{
                style: {
                    marginTop: "2px",
                }
            }}
            navButtonsProps={{
                style: {
                    color: "rgb(255,255,255,1)",
                    background: "rgb(0,0,0,0.5)",
                    width: "7vw",
                    height: "7vw",
                }
            }}
            PrevIcon={<img style={{ width: "100vw" }} src="/chevron-left.svg" />}
            NextIcon={<img style={{ width: "100vw" }} src="/chevron-right.svg" />}

        >
            {
                props.image.map((image: string) => {
                    return <div style={{ textAlign: "center" as "center" }}><img style={{
                        width: "35vw"
                    }} src={image} /></div>
                })
            }

        </Carousel>
    )
}