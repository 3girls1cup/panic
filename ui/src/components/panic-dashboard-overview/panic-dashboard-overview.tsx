import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'panic-dashboard-overview',
  styleUrl: 'panic-dashboard-overview.css'
})
export class PanicDashboardOverview {

  render() {
    return (
      <Host>
        <panic-header>
          <svc-header headline={"Dashboard Overview"}>
            <svc-dropdown-menu />
          </svc-header>
        </panic-header>
        <svc-content>
          <svc-surface>
            <svc-card></svc-card>
          </svc-surface>
        </svc-content>
        <panic-footer></panic-footer>
      </Host >
    );
  }

}
