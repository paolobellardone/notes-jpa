import { By } from 'selenium-webdriver';
import { DriverLike } from '@oracle/oraclejet-webdriver';
import { RichRadiosetWebElement } from './RichRadiosetWebElement';
export { RichRadiosetWebElement };
/**
 * Retrieve an instance of [RichRadiosetWebElement](../classes/RichRadiosetWebElement.html).
 * @example
 * ```javascript
 * import { findRichRadioset } from '@oracle/oraclejet-core-pack/webdriver';
 * const el = await findRichRadioset(driver, By.id('my-oj-c-rich-radioset'));
 * ```
 * @param driver A WebDriver/WebElement instance from where the element will be
 * searched. If WebDriver is passed, the element will be searched globally in the
 * document. If WebElement is passed, the search will be relative to this element.
 * @param by The locator with which to find the element
 */
export declare function findRichRadioset(driver: DriverLike, by: By): Promise<RichRadiosetWebElement>;
