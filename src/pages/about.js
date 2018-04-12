import React from 'react'
import styled from 'styled-components'
import { media } from '../utils/style.js'

const About = () => (
    <Wrapper>
        <Section>
            <p>I'm Jiyoung Hwang, a web developer and organizer of <a href="https://www.facebook.com/djangogirlsseoul/" target="_blank">Django Girls Seoul</a>.</p>
            <p>I love to create playful UI, learn new tools and frameworks and share through blog posts and workshops. I believe in the power of diversity in tech and the power of technology to make the world flatter and more connected.</p>
            <p>Come and say hi to me at <a href="https://twitter.com/@jyhwng" target="_blank">Twitter</a></p>
        </Section>
        <Section>
            <Columns>
                <div>
                    <h3>Languages</h3>
                    <Tag>Python</Tag>
                    <Tag>Javascript</Tag>
                    <Tag>Typescript</Tag>
                </div>
                <div>
                    <h3>Frameworks & Libraries</h3>
                    <Tag>React</Tag>
                    <Tag>VueJS / Vuex</Tag>
                    <Tag>Meteor</Tag>
                    <Tag>Django</Tag>
                    <Tag>Django Rest Framework</Tag>
                </div>
                <div>
                    <h3>Database</h3>
                    <Tag>GraphQL</Tag>
                    <Tag>MySQL</Tag>
                    <Tag>MongoDB</Tag>
                </div>
                <div>
                    <h3>Test</h3>
                    <Tag>Jest</Tag>
                    <Tag>Enzyme</Tag>
                </div>
                <div>
                    <h3>Others</h3>
                    <Tag>HTML5</Tag>
                    <Tag>CSS3</Tag>
                    <Tag>Sass</Tag>
                    <Tag>Less</Tag>
                    <Tag>Storybook</Tag>
                </div>
            </Columns>
        </Section>
        <Section>
            <h3>Press</h3>
            <ul>
                <li>
                <a href="https://wi-tech.org/2017/11/05/jiyoung-hwang-django-girls-organizer/" target="_blank">Jiyoung Hwang: Django Girls Organizer</a>, Witech, 2017.11.05
                </li>
                <li>
                <a href="http://thepin.ch/techgear/m9qmfd/adela-branch-1" target="_blank">개발 공부하는 여자들, 장고걸스를 만나보았다</a>, Pinch, 2017.04.11
                </li>
            </ul>
        </Section>
        <Section>
            <h3>Conferences & Seminars</h3>
            2018
            <ul>
                <li>Django Girls 2018 Workshop, 2018.6, Seoul</li>
                <li>JSConf 2018, 2018.6, Berlin 🇩🇪</li>
                <li>Women Techmakers 2018, 2018.4, Seoul</li>
                <li>Typescript Meetup, 2018.1, Seoul</li>
            </ul>
            2017
            <ul>
                <li>React Seoul 2017, 2017.11, Seoul</li>
                <li>FrontEndConf 2017, 2017.10, Seoul</li>
                <li>DEVIEW 2017, 2017.10, Seoul</li>
                <li>Hack4Climate Korea, 2017.9, Seoul</li>
                <li>Vuetiful Korea, 2017.8, Seoul</li>
                <li>PyCon 2017, 2017.8, Seoul</li>
                <li>RISE 2017, 2017.7, Hong Kong 🇭🇰</li>
                <li>Pitch Like A Girl, 2017.7, Hong Kong 🇭🇰</li>
                <li>Django Girls 2017 Workshop, 2017.6, Seoul</li>
                <li>Women Techmakers 2017, 2017.4, Seoul</li>
                <li>Korea Community Day 2017, 2017.2, Seoul</li>
            </ul>
        </Section>
    </Wrapper>
)

const Wrapper = styled.div`
    margin-bottom: 160px;
    ${media.tablet`
        padding: 0 16px;
    `}
`

const Columns = styled.div`
    display: grid;
    grid-row-gap: 1em;
    grid-template-columns: 1fr 1fr;
`

const Section = styled.section`
    padding-top: 24px;
    margin-bottom: 40px;
    & + & {
        border-top: 1px solid #ddd;
    }
    li {
        margin-bottom: 4px;
    }
`

const Tag = styled.div`
color: #303030;
display: inline-block;
padding: 4px 8px;
margin-bottom: 8px;
    background-color: #fbe134;
    margin-right: 8px;
`

export default About