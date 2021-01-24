// 验证邮箱的规则
export const checkEmail = (rule, value, cb) => {
    // 验证邮箱的正则表达式
    const regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/

    if (regEmail.test(value)) {
        // 合法的邮箱
        return cb()
    }

    cb(new Error('请输入合法的邮箱'))
}

// 验证手机号的规则
export const checkMobile = (rule, value, cb) => {
    // 验证手机号的正则表达式
    const regMobile = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/

    if (regMobile.test(value)) {
        return cb()
    }

    cb(new Error('请输入合法的手机号'))
}