<template>
    <footer class="footer">
        <div class="footer__content before-bg">
            <img class="footer__content-bg" src="../../assets/images/footer.webp" alt="footer-bg" loading="lazy">
            <div class="footer__content-item container">
                <router-link to="/">
                    <img src="../../assets/images/logo.svg" alt="logo" loading="lazy">
                </router-link>
                <FooterContentForm />
            </div>
        </div>
        <div class="footer__contacts ">
            <div class="footer__contacts-content container">
                <div class="footer__contacts-content-info">
                    <router-link to="/">
                        <img src="../../assets/images/footer-logo.svg" alt="footer-logo" loading="lazy">
                    </router-link>
                    <ul class="footer__contacts-content-info-list" role="list">
                        <li v-for="(link, i) in links" :key="i">
                            <router-link :to="link.get('to')" class="footer__contacts-content-info-list-link">
                                {{ link.get('name') }}
                            </router-link>
                        </li>
                    </ul>
                </div>
                <FooterUpBtn />
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import FooterUpBtn from "./FooterUpBtn.vue";
import FooterContentForm from "./FooterContentForm.vue";
const links: Map<string, string>[] = [
    new Map([['name', '2024'], ['to', '/']]),
    new Map([['name', 'Все права защищены'], ['to', '/']]),
    new Map([['name', 'Политика конфиденциальности'], ['to', '/']]),
    new Map([['name', 'Договор оферты'], ['to', '/']]),
];


</script>

<style lang="scss" scoped>
.footer {
    &__content {
        min-height: 683px;
        position: relative;
        overflow: hidden;
        padding: 50px 0;
        display: flex;

        &-bg {
            position: absolute;
            height: 100%;
            width: 100%;
            border-radius: 50px;
            top: 0;
            left: 0;
            z-index: -1;
        }

       
    }

    &__contacts {
        width: 100%;
        background: white;
        border-radius: 50px 50px 0 0;
        margin-top: -50px;
        z-index: 10;
        padding: 50px 0;
        position: relative;

        & button {
            width: 64px;
            height: 64px;
            border-radius: 50%;
            backdrop-filter: blur(20px);
            box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(103, 110, 118, 0.16), 0 2px 5px 0 rgba(103, 110, 118, 0.08);
            background: rgba(255, 255, 255, 0.2);
            transition: .5s;

            &:active {
                transform: scale(.95);
            }

        }

        &-content {
            display: flex;
            align-items: center;
            justify-content: space-between;

            &-info {
                &-list {
                    display: flex;
                    gap: 24px;
                    margin-top: 60px;

                    &-link {
                        font-weight: 400;
                        font-size: 12px;
                        color: var(--grey500);
                        transition: .5s linear;

                        &:hover {
                            color: var(--grey800);
                        }
                    }
                }
            }
        }
    }
}
</style>