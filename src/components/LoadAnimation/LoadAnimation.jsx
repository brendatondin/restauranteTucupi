import React from 'react'
import S from "./LoadAnimation.module.css"

const LoadAnimation = () => {
    return (
        <section>
            <div className={S.box}></div>
            <div className={S.boxMoon}>
                <img src="https://user-images.githubusercontent.com/102765815/187516244-7e152671-bb0a-41ad-b2be-9ed1114d7f53.png" className={S.moon} alt="" width="100px" height="100px" />
            </div>
            <div className={S.boxOwl}>
                <img src="https://user-images.githubusercontent.com/102765815/187516317-a2e72d1c-a56d-40b8-ae2d-338afb796af5.png" className={S.owl} alt="" width="100px" height="100px" />
            </div>
        </section>
    )
}

export default LoadAnimation