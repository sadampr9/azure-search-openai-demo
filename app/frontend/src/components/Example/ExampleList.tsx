import { Example } from "./Example";
import { useTranslation } from "react-i18next";

import styles from "./Example.module.css";

interface Props {
    onExampleClicked: (value: string) => void;
    useGPT4V?: boolean;
}

export const ExampleList = ({ onExampleClicked, useGPT4V }: Props) => {
    const { t } = useTranslation();

    const DEFAULT_EXAMPLES: string[] = ["¿Cuánto tiempo demora el trámite de constitución?", "¿Qué tipos de sociedades puedo constituir en Perú?", "¿Cómo reservo el nombre de mi empresa?"];
    const GPT4V_EXAMPLES: string[] = [t("gpt4vExamples.1"), t("gpt4vExamples.2"), t("gpt4vExamples.3")];

    return (
        <ul className={styles.examplesNavList}>
            {(useGPT4V ? GPT4V_EXAMPLES : DEFAULT_EXAMPLES).map((question, i) => (
                <li key={i}>
                    <Example text={question} value={question} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
