import { css, customElement, html, LitElement, property } from 'lit-element';

export const Strengths = {
	NO_PASSWORD: 0,

	/**
	 * Risky password. (guesses < 10^3)
	 */
	TOO_GUESSABLE: 1,

	/**
	 * Protection from throttled online attacks. (guesses < 10^6)
	 */
	VERY_GUESSABLE: 2,

	/**
	 * Protection from unthrottled online attacks. (guesses < 10^8)
	 */
	SOMEWHAT_GUESSABLE: 3,

	/**
	 * Moderate protection from offline slow-hash scenario. (guesses < 10^10)
	 */
	SAFELY_UNGUESSABLE: 4,

	/**
	 * Strong protection from offline slow-hash scenario. (guesses >= 10^10)
	 */
	VERY_UNGUESSABLE: 5,
};

/**
 * A password strength indicator
 * @demo demo/index.html
 */
@customElement('password-strength')
export class PasswordStrength extends LitElement {
	/**
	 * See type Strengths for values
	 */
	@property({type: Number, reflect: true})
	public score: number = 0;

	static get styles() {
		return css`
			:host {
				display: block;
				width: 180px;
			}

			#back {
				background: #eee;
			}

			#front {
				height: 5px;
				transition: all .5s;
			}

			:host([score="0"]) #front { width: 0; }
			:host([score="1"]) #front { background: #ff0000; width: 20%; }
			:host([score="2"]) #front { background: #ff4500; width: 40%; }
			:host([score="3"]) #front { background: #ffa500; width: 60%; }
			:host([score="4"]) #front { background: #9acd32; width: 80%; }
			:host([score="5"]) #front { background: #00aa00; width: 100%; }
		`;
	}

	protected render() {
		return html`
			<div id="back">
				<div id="front"></div>
			</div>
		`;
	}
}
