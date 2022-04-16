import Link from "next/link"
import { CSSProperties, FunctionComponent, useEffect, useState } from "react"

interface item {
    img: string,
    link?: string
}

interface Banner {
    items: item[],
    loop?: boolean,
    interval?: number
}

const Banner: FunctionComponent<Banner> = ({ items, loop = true, interval = 5000 }) => {
    const [Current, setCurrent] = useState(0)
    useEffect(() => {
        let timeout : any;
        if (loop) {
            timeout = setTimeout(() => {
                if (Current + 1 > items.length - 1) setCurrent(0)
                else setCurrent(Current + 1)
            }, interval);

        }
        return () => {
            clearTimeout(timeout)
        }
    }, [Current, items, loop])
    return (
        <>
            <div className="banner">
                <div className="track">
                    <div style={{ '--total': items.length, '--current': Current } as CSSProperties} className="list">
                        {
                            items.map((o,i) => <div key={o.img+i} className="item">
                                <img className="cover" src={o.img} alt="" />
                            </div>)
                        }

                    </div>
                    <div className="dots">
                        {
                            items.map((o,index) => <div key={o.link + 'index'} onClick={()=>setCurrent(index)} className={`dot ${Current === index? 'active' : ''}`}></div> )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner