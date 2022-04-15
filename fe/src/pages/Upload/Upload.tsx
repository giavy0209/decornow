import { Layout } from "components";
import { CSSProperties, FunctionComponent, useState } from "react";

interface Data {
    img : any,
    border : string,
    ratio : string
}

const Upload: FunctionComponent = () => {
    const [Data , setData] = useState<Data[]>([{img : null, border : 'full-black' , ratio : '1 / 1'}])
    return (
        <>
            <Layout>
                <div className="upload">
                    <div className="list-image">
                        {
                            Data.map((o,index) => <div key={`img${index}`} style={{'--ratio' : o.ratio} as CSSProperties} className="image">
                                {
                                    o.img &&<img src={o.img} alt="" /> 
                                }
                            </div> )
                        }

                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Upload