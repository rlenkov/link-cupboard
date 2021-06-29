import * as React from 'react'
import * as styles from './cupboard.module.scss'

const Cupboard = ({ pageContext }) => {
    const { data } = pageContext
    const getLinkBoxes = () => {
        if (data.length !== 0) {
            return data.map((link, index) => {
                return (
                    <div
                        key={`link-box-num-${index}`}
                        className={styles.linkBox}
                    >
                        <a href={link[1]}>{link[0]}</a>
                        <p>{link[2]}</p>
                    </div>
                )
            })
        }
        return null
    }
    return (
        <main>
            <h1 className={styles.container}>Link Cupboard!</h1>
            <div className={styles.linkCupboard}>{getLinkBoxes()}</div>
        </main>
    )
}

export default Cupboard
