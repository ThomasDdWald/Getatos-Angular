import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { I18nService } from '../../../core/services/i18n.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <!-- Company Info -->
          <div class="footer-col">
            <div class="footer-logo">
              <img src="https://getatos-safari.com/wp-content/uploads/2025/01/Safari-logo-with-out-bg.png" 
                   alt="Getatos Safari">
            </div>
            <p class="footer-desc">
              {{ i18n.t('home.hero.subtitle') }}
            </p>
            <div class="social-links">
              <a href="https://www.facebook.com/getatossafari" target="_blank" aria-label="Facebook">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/getatossafari/" target="_blank" aria-label="Instagram">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="YouTube">
                <i class="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="footer-col">
            <h4>{{ i18n.t('nav.tours') }}</h4>
            <ul>
              <li><a routerLink="/tours">Serengeti Safari</a></li>
              <li><a routerLink="/tours">Kilimanjaro Trek</a></li>
              <li><a routerLink="/tours">Zanzibar Beach</a></li>
              <li><a routerLink="/tours">Ngorongoro Crater</a></li>
              <li><a routerLink="/tours">Cultural Tours</a></li>
            </ul>
          </div>

          <!-- Company -->
          <div class="footer-col">
            <h4>{{ i18n.t('nav.about') }}</h4>
            <ul>
              <li><a routerLink="/about">About Us</a></li>
              <li><a routerLink="/contact">Contact</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Partners</a></li>
            </ul>
          </div>

          <!-- Contact -->
          <div class="footer-col">
            <h4>{{ i18n.t('common.contact') }}</h4>
            <ul class="contact-list">
              <li>
                <i class="fas fa-map-marker-alt"></i>
                <span>Arusha, Tanzania</span>
              </li>
              <li>
                <i class="fas fa-phone"></i>
                <span>+255 123 456 789</span>
              </li>
              <li>
                <i class="fas fa-envelope"></i>
                <span>info@getatos-safari.com</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Newsletter -->
        <div class="newsletter">
          <h4>Newsletter</h4>
          <p>Subscribe to receive special offers and updates</p>
          <form class="newsletter-form">
            <input type="email" placeholder="Your email address">
            <button type="submit">
              <i class="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>

        <!-- Bottom Bar -->
        <div class="footer-bottom">
          <p>&copy; {{ currentYear }} Getatos Safari. All rights reserved.</p>
          <div class="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: #1A202C;
      color: #A0AEC0;
      padding: 4rem 0 0;
      margin-top: 4rem;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: 1.5fr 1fr 1fr 1fr;
      gap: 3rem;
      padding-bottom: 3rem;
      border-bottom: 1px solid #2D3748;
    }

    .footer-col {
      h4 {
        color: white;
        font-family: 'Playfair Display', serif;
        font-size: 1.125rem;
        margin-bottom: 1.5rem;
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          margin-bottom: 0.75rem;

          a {
            color: #A0AEC0;
            transition: color 0.2s ease;

            &:hover {
              color: #D4A853;
            }
          }
        }
      }
    }

    .footer-logo {
      margin-bottom: 1rem;
      
      img {
        height: 50px;
        width: auto;
      }
    }

    .footer-desc {
      color: #718096;
      font-size: 0.9rem;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .social-links {
      display: flex;
      gap: 1rem;

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        background: #2D3748;
        border-radius: 8px;
        color: #A0AEC0;
        transition: all 0.2s ease;

        &:hover {
          background: #D4A853;
          color: #1A202C;
        }
      }
    }

    .contact-list {
      li {
        display: flex;
        align-items: flex-start;
        gap: 0.75rem;

        i {
          color: #D4A853;
          margin-top: 4px;
        }

        span {
          font-size: 0.9rem;
        }
      }
    }

    .newsletter {
      padding: 2rem 0;
      border-bottom: 1px solid #2D3748;
      text-align: center;

      h4 {
        color: white;
        font-family: 'Playfair Display', serif;
        margin-bottom: 0.5rem;
      }

      p {
        color: #718096;
        margin-bottom: 1.5rem;
      }
    }

    .newsletter-form {
      display: flex;
      max-width: 400px;
      margin: 0 auto;
      gap: 0;

      input {
        flex: 1;
        padding: 0.75rem 1rem;
        border: 2px solid #2D3748;
        border-right: none;
        background: #2D3748;
        color: white;
        border-radius: 8px 0 0 8px;
        
        &::placeholder {
          color: #718096;
        }

        &:focus {
          outline: none;
          border-color: #D4A853;
        }
      }

      button {
        padding: 0.75rem 1.25rem;
        background: #D4A853;
        border: none;
        border-radius: 0 8px 8px 0;
        color: #1A202C;
        cursor: pointer;
        transition: background 0.2s ease;

        &:hover {
          background: #E5C47A;
        }
      }
    }

    .footer-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.5rem 0;
      font-size: 0.875rem;

      p {
        margin: 0;
        color: #718096;
      }
    }

    .footer-links {
      display: flex;
      gap: 2rem;

      a {
        color: #718096;
        
        &:hover {
          color: #D4A853;
        }
      }
    }

    @media (max-width: 1024px) {
      .footer-grid {
        grid-template-columns: 1fr 1fr;
      }
    }

    @media (max-width: 640px) {
      .footer-grid {
        grid-template-columns: 1fr;
      }

      .footer-bottom {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
      }

      .footer-links {
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
      }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  constructor(public i18n: I18nService) {}
}
