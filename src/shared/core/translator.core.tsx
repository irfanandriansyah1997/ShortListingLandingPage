/**
 * Translator Core
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.16
 */

abstract class TranslatorCore {
    protected type: string;

    constructor(type: string) {
        this.type = type;
    }

    set type_translator(type: string) {
        this.type = type;
    }

    get type_translator(): string {
        return this.type;
    }

    abstract translate(): any;

    abstract getMappingTranslator(): any;
}

export default TranslatorCore;
