import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
// XXX: This pollutes the window object
import 'zxcvbn/dist/zxcvbn';

/**
 * `<password-strength>` - a password strength indicator, powered by zxcvbn
 * @demo demo/index.html
 */
export class PasswordStrength extends PolymerElement {
	static get template() {
		return html`
		<style>
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
		</style>
		<div id="back">
			<div id="front"></div>
		</div>`;
	}

	static get is() {
		return 'password-strength';
	}

	static get properties() {
		return {

			/**
			 * Password string
			 */
			password: {
				observer: '_passwordChanged',
				type: String,
			},

			/**
			 * Password score, integer 0-5
			 *  0 - no password
			 *  1 - too guessable: risky password. (guesses < 10^3)
			 *  2 - very guessable: protection from throttled online attacks. (guesses < 10^6)
			 *  3 - somewhat guessable: protection from unthrottled online attacks. (guesses < 10^8)
			 *  4 - safely unguessable: moderate protection from offline slow-hash scenario. (guesses < 10^10)
			 *  5 - very unguessable: strong protection from offline slow-hash scenario. (guesses >= 10^10)
			 */
			score: {
				reflectToAttribute: true,
				type: Number,
			},

			/**
			 * Password strength estimation object
			 * https://github.com/dropbox/zxcvbn
			 */
			zxcvbn: {
				type: Object,
			},
		};
	}

	_passwordChanged(password) {
		this.zxcvbn = zxcvbn(password); // eslint-disable-line no-undef
		if (!password) {
			this.score = 0;
		} else {
			this.score = 1 + this.zxcvbn.score;
		}
	}
}

customElements.define(PasswordStrength.is, PasswordStrength);
