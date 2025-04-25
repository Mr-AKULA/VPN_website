import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'logo',
  imports: [RouterLink],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  template: `
  <a routerLink="/" aria-label="Brand">
    <!-- Для светлой темы -->
    <img 
      src="assets/icons/favicon-dark.png" 
      alt="AKULA VPN Logo" 
      class="hover:text-primary h-6 w-6 dark:hidden"
    >
    
    <!-- Для темной темы -->
    <img 
      src="assets/icons/favicon-light.png" 
      alt="AKULA VPN Logo" 
      class="hover:text-primary h-6 w-6 hidden dark:block"
    >
  </a>
`
})
export class Logo {}
