<template>
    <form class="form" @submit.prevent="login" v-if="auth">
        <h1 class="form__title">My Profile {{ authState.user_id }}</h1>
        <div class="form__group">
            <label>Name</label>
            <span></span>
        </div>
        <div class="form__group">
            <label>Email</label>
            <span></span>
        </div>
        <div class="form__group">
            <label>Date Joined</label>
            <span></span>
        </div>
    </form>
</template>

<script>
    import Auth from '../store/auth'
    import Flash from '../helpers/flash'
    import constant from '../helpers/constants'
    export default {
        data() {
            return {
                authState: Auth.state,
                flash: Flash.state
            }
        },
        computed: {
            auth() {
                if(this.authState.api_token) {
                    return true
                }
                return false
            },
            guest() {
                return !this.auth
            }
        },
    }
</script>

<style scoped>

</style>