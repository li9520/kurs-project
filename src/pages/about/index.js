import { getPage } from "../../shared/lib"

export default () => {
    return getPage({
        title: "О нас",
        body: `
            <h1>О нас</h1>
            <nav>
                <ul>
                    <li>
                        <a href="/">Главная</a>
                    </li>
                    <li>
                        <a href="/about.html">О нас</a>
                    </li>
                </ul>
            </nav>
        `
    })
}