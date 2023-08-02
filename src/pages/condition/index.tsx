import condition from '@/assets/static-data/condition';
import privacy from '@/assets/static-data/privacy';
import SimpleBanner from '@/components/common/SimpleBanner';
import { Para20, Para50, ParaDiv } from '@/components/common/typography/para';
import { BlueTitle, BlueTitleNum } from '@/components/common/typography/titles';

export default function Condition() {
  return (
    <div className="">
      {/*________________________________________________________________________________________
                                           Simple Banner
      ________________________________________________________________________________________ */}
      <SimpleBanner img="condition-bg">Terms and Conditions</SimpleBanner>

      <div className="ml-36 max-w-[1240px]">
        {/*______________________________Section 1______________________________ */}
        <article>
          <BlueTitleNum num={1}>Legal & Policies</BlueTitleNum>
          <ParaDiv className="ml-16">
            Thank you for visiting our website (offervault.com), hereinafter
            referred to as &quot; Website,&quot; &quot;website,&quot; or
            &quot;Site.&quot;
            <br />
            <br />
            This page contains the following legal documents and policies for
            our website:
            <br />
            <br />
            <ul className="ml-5	list-disc">
              <li>Accessibility Policy</li>
              <br />
              <li>
                Terms and Conditions of Use (including Video and Audio content)
              </li>
              <br />
              <li>Electronic Communications Policy</li>
              <br />
              <li>Material Connections and Compensation Disclosure</li>
              <br />
              <li>External Links Policy </li>
            </ul>
          </ParaDiv>
        </article>

        {/* ______________________________Section 2___________________________ */}
        <article>
          <BlueTitleNum className="mt-[50px]" num={2}>
            These Policies, Terms, Conditions, and Customer Agreements{' '}
          </BlueTitleNum>
          <Para50 className="ml-16">{condition.section2[1]}</Para50>
        </article>

        {/* ______________________________Section 3___________________________ */}
        <article>
          <BlueTitleNum num={3}>Licensee Status </BlueTitleNum>
          <Para50 className="ml-16">{condition.section3[1]}</Para50>
        </article>

        {/* ______________________________Section 4___________________________ */}
        <article>
          <BlueTitleNum num={4}>Content Ownership </BlueTitleNum>
          <Para20 className="ml-16">{condition.section4[1]}</Para20>
          <Para20 className="ml-16">{condition.section4[2]}</Para20>
          <Para20 className="ml-16">{condition.section4[3]}</Para20>
          <Para50 className="ml-16">{condition.section4[4]}</Para50>
        </article>

        {/* ______________________________Section 5___________________________ */}
        <article>
          <BlueTitleNum num={5}>
            Cyber-Bullying and Internet Harassment{' '}
          </BlueTitleNum>
          <Para20 className="ml-16">{condition.section5[1]}</Para20>
          <Para20 className="ml-16">{condition.section5[2]}</Para20>
          <Para50 className="ml-16">{condition.section5[3]}</Para50>
        </article>

        {/* ______________________________Section 6___________________________ */}
        <article>
          <BlueTitleNum num={6}>Business Opportunities</BlueTitleNum>

          <Para50 className="ml-16">{condition.section6[1]}</Para50>
        </article>
      </div>
    </div>
  );
}
