import Vue from 'vue'

import * as URL from '../common/api_url'
import ApiUtils from '../scripts/api_utils'
import CommonUtils from '../scripts/common_utils'

export default {
    name: 'CreateAccountDone',
    data() {
        return {
        }
    },
    methods: {
        email_confirm() {
            let key = this.$route.query.key
            let _this = this;

            if (key != undefined) {
                new ApiUtils().getAccess(
                    URL.GET_ACCOUNT_EMAIL_CONFIRM,
                    {
                        "oneTimePassword": key
                    },
                    (response) => {
                        if (response.code == 0) {
                            // メールアドレスの確認が出来たら、TOPページへ遷移する
                            _this.$router.push('/')
                        } else {
                            alert(response.errorInfo.errorMessage)
                            console.log('メールアドレス有効性確認エラー')
                            console.log(response)
                        }
                    }
                )
            }
        },
        go_to_top() {
            _this.$router.push('/')
        }
    },
    mounted() {
        this.email_confirm()
    },
}