import privacy from '@/assets/static-data/privacy';
import SimpleBanner from '@/components/common/SimpleBanner';
import BlueTitle from '@/components/common/typography/BlueTitle';
import { Para20, Para50 } from '@/components/common/typography/Para';

export default function Condition() {
  return (
    <div className="">
      {/*________________________________________________________________________________________
                                           Simple Banner
      ________________________________________________________________________________________ */}
      <SimpleBanner img="condition-bg">Terms and Conditions</SimpleBanner>

      {/*____________________________________________________________________________________________
                                    Information Collection and Use      ____________________________________________________________________________________________ */}
      <div className="ml-36 max-w-[1240px]">
        <article>
          <Para20 className={'mb-5'}>{privacy.section1st[1]}</Para20>
          <Para50>{privacy.section1st[2]}</Para50>
        </article>
        <article>
          <BlueTitle>Information Collection and Use</BlueTitle>
          <Para20>{privacy.section2nd[1]}</Para20>
          <Para20>{privacy.section2nd[2]}</Para20>
          <Para20>
            the type of browser you use to access our website/newsletter; <br />
            the number of sessions per day; <br />
            the type of device (e.g. iPhone) and operating system (e.g. iOS) you
            are using; <br />
            if you opened our newsletters; <br />
            user preferences; and <br />
            which pages you visited.
          </Para20>
        </article>
        <article>
          <BlueTitle>
            THIS IS WHAT WE DO WITH THE INFORMATION WE COLLECT ABOUT YOU
          </BlueTitle>
          <Para20>We use the information you provide to us to:</Para20>
          <Para50>
            enable us to provide the Services; <br />
            ensure that content from our Website, Apps and Newsletters is
            presented in the <br />
            most effective manner for you and for your device to achieve the
            most user- <br />
            friendly navigation experience; <br />
            provide you with marketing information about us and our services;{' '}
            <br />
            notify you about changes to the Website, Apps and Newsletters and
            the <br />
            Services; <br />
            carry out our obligations arising <br />
            out of the Terms of Use; and/or <br />
            defend our servers against malicious attacks.
          </Para50>
        </article>
        <article>
          <BlueTitle>Cookies </BlueTitle>
          <Para20>{privacy.sectionCookies[1]}</Para20>{' '}
          <Para20>{privacy.sectionCookies[2]}</Para20>
          <Para20>{privacy.sectionCookies[3]}</Para20>
          <div>
            <ul>
              <li>To facilitate our Service;</li>
              <li> To provide the Service on our behalf;</li>
              <li> To perform Service-related services; or</li>
              <li>To assist us in analyzing how our Service is used. </li>
            </ul>
          </div>
          <Para20>{privacy.sectionCookies[4]}</Para20>
          <Para20>{privacy.sectionCookies[5]}</Para20>
          <Para20>{privacy.sectionCookies[6]}</Para20>
          <Para50>{privacy.sectionCookies[7]}</Para50>
        </article>
        {/* _________________________________________________________________________________________
                                              Security
        __________________________________________________________________________________________ */}
        <article>
          <BlueTitle>Security</BlueTitle>
          <Para50>{privacy.sectionSecurity[1]}</Para50>
        </article>

        {/* _________________________________________________________________________________________
                                              Links to Other Sites
        __________________________________________________________________________________________ */}
        <article>
          <BlueTitle>Links to Other Sites</BlueTitle>
          <Para50>{privacy.sectionLinksToOtherSites[1]}</Para50>
        </article>
        {/* _________________________________________________________________________________________
                                          Changes To This Privacy Policy
        __________________________________________________________________________________________ */}
        <article>
          <BlueTitle>Links to Other Sites</BlueTitle>
          <Para50>{privacy.sectionChangesToThisPrivacyPolicy[1]}</Para50>
        </article>
        {/* _________________________________________________________________________________________
                                                  Contact Us
        __________________________________________________________________________________________ */}
        <article>
          <BlueTitle>Contact Us</BlueTitle>
          <Para50>{privacy.sectionContactUs[1]}</Para50>
        </article>
      </div>
    </div>
  );
}
