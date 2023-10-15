import { getPage } from "../../shared/lib"

export default () => {
    return getPage({
        title: "Главная",
        body: `
            <h1>главная</h1>
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