{% set title="Signing Up for GitHub Copilot" %}
<frontmatter>
  title: "{{ title }}"
  pageNav: 2
</frontmatter>

<include src="../common/common-fragments.md#wip-warning" />

# {{ title }}

<div id="body">

**GitHub Copilot is an account-linked service that sits on top of your GitHub account.** You need to enable it (via subscription or educational benefits) to use it. Given below are the steps:

* Sign up for a GitHub Account, if you don't have one yet.
* **Fill in your billing information** {{ step_numbers }}
  * Go to the [billing information for your GitHub account](https://github.com/settings/billing/payment_information).
  * Fill in only your billing information (Payment method and other details are not required).<br>
    <pic src="images/copilotSignUp/billingInformation.png" width="400" />
  * Click on `Save billing information` to save.
* **Enable Two-Factor Authentication (2FA)**. You can skip this step if you have already done so.
  * Go to the [Two-factor authentication page](https://github.com/settings/security) for your GitHub account.
  * Click on `Enable two-factor authentication`.
  * Open the [Microsoft Authenticator App](https://www.microsoft.com/en-us/security/mobile-authenticator-app) on your phone.
  * Tap the scan QR code button at the bottom right.<br>
    <pic src="images/copilotSignUp/scanQrCode.png" width="400" />
  * Scan the QR code displayed on the GitHub page.
  * Complete the remaining setup steps.
  * You should see the following page when 2FA is enabled.<br>
    <pic src="images/copilotSignUp/2faEnabled.png" width="400" />
* **Link your university email to GitHub** (for Education benefits).
  * Go to the [emails settings page](https://github.com/settings/emails) in GitHub account.
  * Add your university-issued email under the `Add email address` field.
  * Verify your email using the link sent to your inbox.
  * Once verified, you will see your school email in the list of emails.
* **Apply for GitHub Education benefits**
  * Go to the [GitHub Education page](https://github.com/settings/education/benefits).
  * Click on `Start an application`.
  * Select your role as `Student`.
  * Choose university as your school %%(e.g., National University of Singapore)%%.
  * Follow the instructions and complete the application form.
  * Once your application is approved, it will show that you have a current student coupon applied.

---

**Contributors**: Norbert Loh ([@NorbertLoh ](https://github.com/NorbertLoh ))

</div>
