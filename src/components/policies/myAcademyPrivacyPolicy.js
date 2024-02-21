import './Privacy.css'
import React from 'react'
import { Link, Element } from 'react-scroll'

export default function MyAcademyPrivacyPolicy() {
    return (
        <>
            <p>Last updated February 20, 2024</p>
            <p>
                This privacy notice for The BoxStreet Bois ("we," "us," or
                "our"), describes how and why we might collect, store, use,
                and/or share ("process") your information when you use our
                services ("Services"), such as when you:
            </p>
            <ul>
                <li>
                    Download and use our mobile application (myAcademy), or any
                    other application of ours that links to this privacy notice
                </li>
                <li>
                    Engage with us in other related ways, including any sales,
                    marketing, or events
                </li>
            </ul>
            <p>
                Questions or concerns? Reading this privacy notice will help you
                understand your privacy rights and choices. If you do not agree
                with our policies and practices, please do not use our Services.
                If you still have any questions or concerns, please contact us
                at{' '}
                <a href="mailto:kristian.ayam@gmail.com">
                    kristian.ayam@gmail.com
                </a>
                .
            </p>
            <h2>SUMMARY OF KEY POINTS</h2>
            <p>
                This summary provides key points from our privacy notice, but
                you can find out more details about any of these topics by
                clicking the link following each key point or by using our table
                of contents below to find the section you are looking for.
            </p>
            <ul>
                <li>What personal information do we process?</li>
                <p>
                    When you visit, use, or navigate our Services, we may
                    process personal information depending on how you interact
                    with us and the Services, the choices you make, and the
                    products and features you use. Learn more about personal
                    information you disclose to us.
                </p>
                <li>Do we process any sensitive personal information?</li>
                <p>
                    We may process sensitive personal information when necessary
                    with your consent or as otherwise permitted by applicable
                    law. Learn more about sensitive information we process.
                </p>
                <li>Do we receive any information from third parties?</li>
                <p>We do not receive any information from third parties.</p>
                <li>How do we process your information?</li>
                <p>
                    We process your information to provide, improve, and
                    administer our Services, communicate with you, for security
                    and fraud prevention, and to comply with law. We may also
                    process your information for other purposes with your
                    consent. We process your information only when we have a
                    valid legal reason to do so. Learn more about how we process
                    your information.
                </p>
                <li>
                    In what situations and with which parties do we share
                    personal information?
                </li>
                <p>
                    We may share information in specific situations and with
                    specific third parties. Learn more about when and with whom
                    we share your personal information.
                </p>
                <li>What are your rights?</li>
                <p>
                    Depending on where you are located geographically, the
                    applicable privacy law may mean you have certain rights
                    regarding your personal information. Learn more about your
                    privacy rights.
                </p>
                <li>How do you exercise your rights?</li>
                <p>
                    The easiest way to exercise your rights is by visiting{' '}
                    <a href="https://www.krisyam.com/contactme">
                        krisyam.com/contactme
                    </a>
                    , or by contacting us. We will consider and act upon any
                    request in accordance with applicable data protection laws.
                </p>
            </ul>
            <h2>
                Want to learn more about what we do with any information we
                collect?
            </h2>
            <p>Review the privacy notice in full.</p>
            <div className="">
                <div className="">
                    <ol>
                        {tableOfContents.map((id, index) => (
                            <Link
                                className="clickable-link"
                                to={index + 1}
                                spy={true}
                                smooth={true}
                            >
                                <li key={index + 1}>{`${id}`}</li>
                            </Link>
                        ))}
                    </ol>
                </div>
                <ol className="">
                    {contentSections.map((id, index) => (
                        <Element name={index + 1} key={index + 1}>
                            <h3>
                                <li>{id.title}</li>
                            </h3>
                            {id.content}
                        </Element>
                    ))}
                </ol>
            </div>
        </>
    )
}

const tableOfContents = [
    'What information do we collect?',
    'How do we process your information?',
    'When and with whom do we share your personal information?',
    'How do we handle your social logins?',
    'How long do we keep your information?',
    'What are your privacy rights?',
    'Controls for do-not-track features',
    'Do we make updates to this notice?',
    'How can you contact us about this notice?',
    'How can you review, update, or delete the data we collect from you?',
]

const contentSections = [
    {
        title: 'What information do we collect?',
        content: (
            <>
                <p>
                    <strong>Personal information you disclose to us</strong>
                </p>
                <p>
                    <strong>In Short:</strong> We collect personal information
                    that you provide to us.
                </p>
                <p>
                    We collect personal information that you voluntarily provide
                    to us when you register on the Services, express an interest
                    in obtaining information about us or our products and
                    Services, when you participate in activities on the
                    Services, or otherwise when you contact us.
                </p>
                <p>
                    <strong>Personal Information Provided by You.</strong> The
                    personal information that we collect depends on the context
                    of your interactions with us and the Services, the choices
                    you make, and the products and features you use. The
                    personal information we collect may include the following:
                </p>
                <ul>
                    <li>Names</li>
                    <li>Email addresses</li>
                </ul>
                <p>
                    <strong>Sensitive Information.</strong> When necessary, with
                    your consent or as otherwise permitted by applicable law, we
                    process the following categories of sensitive information:
                </p>
                <ul>
                    <li>Student data</li>
                    <li>Student mail</li>
                </ul>
                <p>
                    <strong>Social Media Login Data.</strong> We may provide you
                    with the option to register with us using your existing
                    social media account details, like your Facebook, Twitter,
                    or other social media account. If you choose to register in
                    this way, we will collect the information described in the
                    section called "HOW DO WE HANDLE YOUR SOCIAL LOGINS?" below.
                </p>
                <p>
                    <strong>Application Data.</strong> If you use our
                    application(s), we also may collect the following
                    information if you choose to provide us with access or
                    permission:
                </p>
                <ul>
                    <li>Mobile Device Access</li>
                    <li>Mobile Device Data</li>
                    <li>Push Notifications</li>
                </ul>
                <p>
                    This information is primarily needed to maintain the
                    security and operation of our application(s), for
                    troubleshooting, and for our internal analytics and
                    reporting purposes.
                </p>
                <p>
                    All personal information that you provide to us must be
                    true, complete, and accurate, and you must notify us of any
                    changes to such personal information.
                </p>
                <p>
                    <strong>Information automatically collected</strong>
                </p>
                <p>
                    <strong>In Short:</strong> Some information — such as your
                    Internet Protocol (IP) address and/or browser and device
                    characteristics — is collected automatically when you visit
                    our Services.
                </p>
                <p>
                    We automatically collect certain information when you visit,
                    use, or navigate the Services. This information does not
                    reveal your specific identity (like your name or contact
                    information) but may include device and usage information,
                    such as your IP address, browser and device characteristics,
                    operating system, language preferences, referring URLs,
                    device name, country, location, information about how and
                    when you use our Services, and other technical information.
                    This information is primarily needed to maintain the
                    security and operation of our Services, and for our internal
                    analytics and reporting purposes.
                </p>
                <p>The information we collect includes:</p>
                <ul>
                    <li>Log and Usage Data</li>
                    <li>Device Data</li>
                </ul>
            </>
        ),
    },
    {
        title: 'How do we process your information?',
        content: (
            <>
                <p>
                    <strong>In Short:</strong> We process your information to
                    provide, improve, and administer our Services, communicate
                    with you, for security and fraud prevention, and to comply
                    with law. We may also process your information for other
                    purposes with your consent.
                </p>
                <p>
                    We process your personal information for a variety of
                    reasons, depending on how you interact with our Services,
                    including:
                </p>
                <ul>
                    <li>
                        To facilitate account creation and authentication and
                        otherwise manage user accounts. We may process your
                        information so you can create and log in to your
                        account, as well as keep your account in working order.
                    </li>
                    <li>
                        To evaluate and improve our Services, products,
                        marketing, and your experience. We may process your
                        information when we believe it is necessary to identify
                        usage trends, determine the effectiveness of our
                        promotional campaigns, and to evaluate and improve our
                        Services, products, marketing, and your experience.
                    </li>
                    <li>
                        To identify usage trends. We may process information
                        about how you use our Services to better understand how
                        they are being used so we can improve them.
                    </li>
                </ul>
            </>
        ),
    },
    {
        title: 'When and with whom do we share your personal information?',
        content: (
            <>
                <p>
                    <strong>In Short:</strong> We may share information in
                    specific situations described in this section and/or with
                    the following third parties.
                </p>
                <p>
                    <strong>
                        Vendors, Consultants, and Other Third-Party Service
                        Providers:
                    </strong>{' '}
                    We may share your data with third-party vendors, service
                    providers, contractors, or agents ("third parties") who
                    perform services for us or on our behalf and require access
                    to such information to do that work. We have contracts in
                    place with our third parties, which are designed to help
                    safeguard your personal information. This means that they
                    cannot do anything with your personal information unless we
                    have instructed them to do it. They will also not share your
                    personal information with any organization apart from us.
                    They also commit to protect the data they hold on our behalf
                    and to retain it for the period we instruct. The third
                    parties we may share personal information with are as
                    follows:
                </p>
                <ul>
                    <li>
                        Allow Users to Connect to Their Third-Party Accounts:
                        Google account
                    </li>
                    <li>
                        Functionality and Infrastructure Optimization: Firebase
                        Realtime Database and Cloud Storage for Firebase
                    </li>
                    <li>
                        User Account Registration and Authentication: Google
                        OAuth 2.0
                    </li>
                    <li>Web and Mobile Analytics: Google Analytics</li>
                    <li>Website Testing: Google Play Console</li>
                </ul>
                <p>
                    We also may need to share your personal information in the
                    following situations:
                </p>
                <ul>
                    <li>
                        <strong>Business Transfers:</strong> We may share or
                        transfer your information in connection with, or during
                        negotiations of, any merger, sale of company assets,
                        financing, or acquisition of all or a portion of our
                        business to another company.
                    </li>
                    <li>
                        <strong>When we use Google Analytics:</strong> We may
                        share your information with Google Analytics to track
                        and analyze the use of the Services. The Google
                        Analytics Advertising Features that we may use include:
                        Google Analytics Demographics and Interests Reporting.
                        To opt out of being tracked by Google Analytics across
                        the Services, visit{' '}
                        <a
                            href="https://tools.google.com/dlpage/gaoptout"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://tools.google.com/dlpage/gaoptout
                        </a>
                        . You can opt out of Google Analytics Advertising
                        Features through Ads Settings and Ad Settings for mobile
                        apps. Other opt-out means include{' '}
                        <a
                            href="http://optout.networkadvertising.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            http://optout.networkadvertising.org/
                        </a>{' '}
                        and{' '}
                        <a
                            href="http://www.networkadvertising.org/mobile-choice"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            http://www.networkadvertising.org/mobile-choice
                        </a>
                        . For more information on the privacy practices of
                        Google, please visit the{' '}
                        <a
                            href="https://policies.google.com/privacy"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Google Privacy & Terms
                        </a>{' '}
                        page.
                    </li>
                </ul>
            </>
        ),
    },
    {
        title: 'How do we handle your social logins?',
        content: (
            <>
                <p>
                    <strong>In Short:</strong> If you choose to register or log
                    in to our Services using a social media account, we may have
                    access to certain information about you.
                </p>
                <p>
                    Our Services offer you the ability to register and log in
                    using your third-party social media account details (like
                    your Facebook or Twitter logins). Where you choose to do
                    this, we will receive certain profile information about you
                    from your social media provider. The profile information we
                    receive may vary depending on the social media provider
                    concerned but will often include your name, email address,
                    friends list, and profile picture, as well as other
                    information you choose to make public on such a social media
                    platform.
                </p>
                <p>
                    We will use the information we receive only for the purposes
                    that are described in this privacy notice or that are
                    otherwise made clear to you on the relevant Services. Please
                    note that we do not control and are not responsible for
                    other uses of your personal information by your third-party
                    social media provider. We recommend that you review their
                    privacy notice to understand how they collect, use, and
                    share your personal information, and how you can set your
                    privacy preferences on their sites and apps.
                </p>
            </>
        ),
    },
    {
        title: 'How long do we keep your information?',
        content: (
            <>
                <p>
                    <strong>In Short:</strong> We keep your information for as
                    long as necessary to fulfill the purposes outlined in this
                    privacy notice unless otherwise required by law.
                </p>
                <p>
                    We will only keep your personal information for as long as
                    it is necessary for the purposes set out in this privacy
                    notice, unless a longer retention period is required or
                    permitted by law (such as tax, accounting, or other legal
                    requirements). No purpose in this notice will require us to
                    keep your personal information for longer than six (6)
                    months past the start of the idle period of the user's
                    account.
                </p>
                <p>
                    When we have no ongoing legitimate business need to process
                    your personal information, we will either delete or
                    anonymize such information, or, if this is not possible (for
                    example, because your personal information has been stored
                    in backup archives), then we will securely store your
                    personal information and isolate it from any further
                    processing until deletion is possible.
                </p>
            </>
        ),
    },
    {
        title: 'What are your privacy rights?',
        content: (
            <>
                <p>
                    <strong>In Short:</strong> You may review, change, or
                    terminate your account at any time.
                </p>
                <p>
                    <strong>Withdrawing your consent:</strong> If we are relying
                    on your consent to process your personal information, which
                    may be express and/or implied consent depending on the
                    applicable law, you have the right to withdraw your consent
                    at any time. You can withdraw your consent at any time by
                    contacting us by using the contact details provided in the
                    section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.
                </p>
                <p>
                    However, please note that this will not affect the
                    lawfulness of the processing before its withdrawal nor, when
                    applicable law allows, will it affect the processing of your
                    personal information conducted in reliance on lawful
                    processing grounds other than consent.
                </p>
                <p>
                    <strong>Account Information:</strong> If you would at any
                    time like to review or change the information in your
                    account or terminate your account, you can:
                </p>
                <ul>
                    <li>Contact us using the contact information provided.</li>
                </ul>
                <p>
                    Upon your request to terminate your account, we will
                    deactivate or delete your account and information from our
                    active databases. However, we may retain some information in
                    our files to prevent fraud, troubleshoot problems, assist
                    with any investigations, enforce our legal terms and/or
                    comply with applicable legal requirements.
                </p>
                <p>
                    If you have questions or comments about your privacy rights,
                    you may email us at kristian.ayam@gmail.com.
                </p>
            </>
        ),
    },
    {
        title: 'Controls for do-not-track features',
        content: (
            <>
                <p>
                    <strong>In Short:</strong> Most web browsers and some mobile
                    operating systems and mobile applications include a
                    Do-Not-Track ("DNT") feature or setting you can activate to
                    signal your privacy preference not to have data about your
                    online browsing activities monitored and collected.
                </p>
                <p>
                    At this stage, no uniform technology standard for
                    recognizing and implementing DNT signals has been finalized.
                    As such, we do not currently respond to DNT browser signals
                    or any other mechanism that automatically communicates your
                    choice not to be tracked online. If a standard for online
                    tracking is adopted that we must follow in the future, we
                    will inform you about that practice in a revised version of
                    this privacy notice.
                </p>
            </>
        ),
    },
    {
        title: 'Do we make updates to this notice?',
        content: (
            <>
                <p>
                    <strong>In Short:</strong> Yes, we will update this notice
                    as necessary to stay compliant with relevant laws.
                </p>
                <p>
                    We may update this privacy notice from time to time. The
                    updated version will be indicated by an updated "Revised"
                    date, and the updated version will be effective as soon as
                    it is accessible. If we make material changes to this
                    privacy notice, we may notify you either by prominently
                    posting a notice of such changes or by directly sending you
                    a notification. We encourage you to review this privacy
                    notice frequently to be informed of how we are protecting
                    your information.
                </p>
            </>
        ),
    },
    {
        title: 'How can you contact us about this notice?',
        content: (
            <>
                <p>
                    If you have questions or comments about this notice, you may
                    email us at kristian.ayam@gmail.com.
                </p>
            </>
        ),
    },
    {
        title: 'How can you review, update, or delete the data we collect from you?',
        content: (
            <>
                <p>
                    <strong>
                        Based on the applicable laws of your country, you may
                        have the right to request access to the personal
                        information we collect from you, change that
                        information, or delete it.
                    </strong>{' '}
                    To request to review, update, or delete your personal
                    information, please visit:{' '}
                    <a href="https://www.krisyam.com/contactme">
                        krisyam.com/contactme
                    </a>
                    .
                </p>
            </>
        ),
    },
]
