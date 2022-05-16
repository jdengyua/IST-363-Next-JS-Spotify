import Container from "./Container"
import Row from './Row'
import Col from './Col'

import styles from './footer.module.scss'
import Logo from "./Logo"
import Nav from "./Nav"

const Footer = () => {
    return <footer className={styles.footer}>
        <Container>
            <Row alignItems="center">
                <Col xs="3" sm="3">
                    <Logo color="white" />
                </Col>
                <Col sm="6">
                    <Nav />
                </Col>
                <Col sm="3">
                    social media links
                </Col>
            </Row>
            <Row>
                <Col>
                Copyright 2022 Spotify Inc.
                </Col>
            </Row>
        </Container>
        </footer>
}
export default Footer;