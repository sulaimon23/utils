"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.truncate = exports.trimAndUppercase = exports.trimAndLowercase = exports.toTitleCase = exports.toMinorUnits = exports.textSubtract = exports.splitCompoundString = exports.slugify = exports.roundOff2Dp = exports.percentageChange = exports.normalizePhoneNumber = exports.isWeekend = exports.isValidEmail = exports.isString = exports.getStartOfDayDate = exports.getShortTextDayMonthOptionalyear = exports.getShortTextDate = exports.getPaginationParameters = exports.getOrdinalSuffix = exports.getMonthDiff = exports.getLastDayOfMonthDate = exports.getInitials = exports.getFormattedTimeString = exports.getFormattedDateString = exports.getFirstDayOfYearDate = exports.getFirstDayOfWeekDate = exports.getFirstDayOfQuarterDate = exports.getFirstDayOfMonthDate = exports.getEndOfDayDate = exports.getDayText = exports.getDateTimeAgo = exports.getDateFullText = exports.getDateDayDiff = exports.getAge = exports.getAAnForWord = exports.generateSequentialString = exports.generateRandomString = exports.fromMinorUnits = exports.formatMoney = exports.discountedPrice = exports.clamp = exports.capitalize = exports.addYearsToDate = exports.addSecondsToDate = exports.addMonthsToDate = exports.addMinutesToDate = exports.addHoursToDate = exports.addDaysToDate = void 0;
const add_days_to_date_js_1 = __importDefault(require("./add-days-to-date.js"));
exports.addDaysToDate = add_days_to_date_js_1.default;
const add_hours_to_date_js_1 = __importDefault(require("./add-hours-to-date.js"));
exports.addHoursToDate = add_hours_to_date_js_1.default;
const add_minutes_to_date_js_1 = __importDefault(require("./add-minutes-to-date.js"));
exports.addMinutesToDate = add_minutes_to_date_js_1.default;
const add_months_to_date_js_1 = __importDefault(require("./add-months-to-date.js"));
exports.addMonthsToDate = add_months_to_date_js_1.default;
const add_seconds_to_date_js_1 = __importDefault(require("./add-seconds-to-date.js"));
exports.addSecondsToDate = add_seconds_to_date_js_1.default;
const add_years_to_date_js_1 = __importDefault(require("./add-years-to-date.js"));
exports.addYearsToDate = add_years_to_date_js_1.default;
const capitalize_js_1 = __importDefault(require("./capitalize.js"));
exports.capitalize = capitalize_js_1.default;
const clamp_js_1 = __importDefault(require("./clamp.js"));
exports.clamp = clamp_js_1.default;
const discounted_price_js_1 = __importDefault(require("./discounted-price.js"));
exports.discountedPrice = discounted_price_js_1.default;
const format_money_js_1 = __importDefault(require("./format-money.js"));
exports.formatMoney = format_money_js_1.default;
const from_minor_units_js_1 = __importDefault(require("./from-minor-units.js"));
exports.fromMinorUnits = from_minor_units_js_1.default;
const generate_random_string_js_1 = __importDefault(require("./generate-random-string.js"));
exports.generateRandomString = generate_random_string_js_1.default;
const generate_sequential_string_js_1 = __importDefault(require("./generate-sequential-string.js"));
exports.generateSequentialString = generate_sequential_string_js_1.default;
const get_a_an_for_word_js_1 = __importDefault(require("./get-a-an-for-word.js"));
exports.getAAnForWord = get_a_an_for_word_js_1.default;
const get_age_js_1 = __importDefault(require("./get-age.js"));
exports.getAge = get_age_js_1.default;
const get_date_day_diff_js_1 = __importDefault(require("./get-date-day-diff.js"));
exports.getDateDayDiff = get_date_day_diff_js_1.default;
const get_date_full_text_js_1 = __importDefault(require("./get-date-full-text.js"));
exports.getDateFullText = get_date_full_text_js_1.default;
const get_date_time_ago_js_1 = __importDefault(require("./get-date-time-ago.js"));
exports.getDateTimeAgo = get_date_time_ago_js_1.default;
const get_day_text_js_1 = __importDefault(require("./get-day-text.js"));
exports.getDayText = get_day_text_js_1.default;
const get_end_of_day_date_js_1 = __importDefault(require("./get-end-of-day-date.js"));
exports.getEndOfDayDate = get_end_of_day_date_js_1.default;
const get_first_day_of_month_date_js_1 = __importDefault(require("./get-first-day-of-month-date.js"));
exports.getFirstDayOfMonthDate = get_first_day_of_month_date_js_1.default;
const get_first_day_of_quarter_date_js_1 = __importDefault(require("./get-first-day-of-quarter-date.js"));
exports.getFirstDayOfQuarterDate = get_first_day_of_quarter_date_js_1.default;
const get_first_day_of_week_date_js_1 = __importDefault(require("./get-first-day-of-week-date.js"));
exports.getFirstDayOfWeekDate = get_first_day_of_week_date_js_1.default;
const get_first_day_of_year_date_js_1 = __importDefault(require("./get-first-day-of-year-date.js"));
exports.getFirstDayOfYearDate = get_first_day_of_year_date_js_1.default;
const get_formatted_date_string_js_1 = __importDefault(require("./get-formatted-date-string.js"));
exports.getFormattedDateString = get_formatted_date_string_js_1.default;
const get_formatted_time_string_js_1 = __importDefault(require("./get-formatted-time-string.js"));
exports.getFormattedTimeString = get_formatted_time_string_js_1.default;
const get_initials_js_1 = __importDefault(require("./get-initials.js"));
exports.getInitials = get_initials_js_1.default;
const get_last_day_of_month_date_js_1 = __importDefault(require("./get-last-day-of-month-date.js"));
exports.getLastDayOfMonthDate = get_last_day_of_month_date_js_1.default;
const get_month_diff_js_1 = __importDefault(require("./get-month-diff.js"));
exports.getMonthDiff = get_month_diff_js_1.default;
const get_ordinal_suffix_js_1 = __importDefault(require("./get-ordinal-suffix.js"));
exports.getOrdinalSuffix = get_ordinal_suffix_js_1.default;
const get_pagination_parameters_js_1 = __importDefault(require("./get-pagination-parameters.js"));
exports.getPaginationParameters = get_pagination_parameters_js_1.default;
const get_short_text_date_js_1 = __importDefault(require("./get-short-text-date.js"));
exports.getShortTextDate = get_short_text_date_js_1.default;
const get_short_text_day_month_optionalyear_js_1 = __importDefault(require("./get-short-text-day-month-optionalyear.js"));
exports.getShortTextDayMonthOptionalyear = get_short_text_day_month_optionalyear_js_1.default;
const get_start_of_day_date_js_1 = __importDefault(require("./get-start-of-day-date.js"));
exports.getStartOfDayDate = get_start_of_day_date_js_1.default;
const is_string_js_1 = __importDefault(require("./is-string.js"));
exports.isString = is_string_js_1.default;
const is_valid_email_js_1 = __importDefault(require("./is-valid-email.js"));
exports.isValidEmail = is_valid_email_js_1.default;
const is_weekend_js_1 = __importDefault(require("./is-weekend.js"));
exports.isWeekend = is_weekend_js_1.default;
const normalize_phone_number_js_1 = __importDefault(require("./normalize-phone-number.js"));
exports.normalizePhoneNumber = normalize_phone_number_js_1.default;
const percentage_change_js_1 = __importDefault(require("./percentage-change.js"));
exports.percentageChange = percentage_change_js_1.default;
const round_off_2_dp_js_1 = __importDefault(require("./round-off-2-dp.js"));
exports.roundOff2Dp = round_off_2_dp_js_1.default;
const slugify_js_1 = __importDefault(require("./slugify.js"));
exports.slugify = slugify_js_1.default;
const split_compound_string_js_1 = __importDefault(require("./split-compound-string.js"));
exports.splitCompoundString = split_compound_string_js_1.default;
const text_subtract_js_1 = __importDefault(require("./text-subtract.js"));
exports.textSubtract = text_subtract_js_1.default;
const to_minor_units_js_1 = __importDefault(require("./to-minor-units.js"));
exports.toMinorUnits = to_minor_units_js_1.default;
const to_title_case_js_1 = __importDefault(require("./to-title-case.js"));
exports.toTitleCase = to_title_case_js_1.default;
const trim_and_lowercase_js_1 = __importDefault(require("./trim-and-lowercase.js"));
exports.trimAndLowercase = trim_and_lowercase_js_1.default;
const trim_and_uppercase_js_1 = __importDefault(require("./trim-and-uppercase.js"));
exports.trimAndUppercase = trim_and_uppercase_js_1.default;
const truncate_js_1 = __importDefault(require("./truncate.js"));
exports.truncate = truncate_js_1.default;
exports.default = {
    addDaysToDate: add_days_to_date_js_1.default,
    addHoursToDate: add_hours_to_date_js_1.default,
    addMinutesToDate: add_minutes_to_date_js_1.default,
    addMonthsToDate: add_months_to_date_js_1.default,
    addSecondsToDate: add_seconds_to_date_js_1.default,
    addYearsToDate: add_years_to_date_js_1.default,
    capitalize: capitalize_js_1.default,
    clamp: clamp_js_1.default,
    discountedPrice: discounted_price_js_1.default,
    formatMoney: format_money_js_1.default,
    fromMinorUnits: from_minor_units_js_1.default,
    generateRandomString: generate_random_string_js_1.default,
    generateSequentialString: generate_sequential_string_js_1.default,
    getAAnForWord: get_a_an_for_word_js_1.default,
    getAge: get_age_js_1.default,
    getDateDayDiff: get_date_day_diff_js_1.default,
    getDateFullText: get_date_full_text_js_1.default,
    getDateTimeAgo: get_date_time_ago_js_1.default,
    getDayText: get_day_text_js_1.default,
    getEndOfDayDate: get_end_of_day_date_js_1.default,
    getFirstDayOfMonthDate: get_first_day_of_month_date_js_1.default,
    getFirstDayOfQuarterDate: get_first_day_of_quarter_date_js_1.default,
    getFirstDayOfWeekDate: get_first_day_of_week_date_js_1.default,
    getFirstDayOfYearDate: get_first_day_of_year_date_js_1.default,
    getFormattedDateString: get_formatted_date_string_js_1.default,
    getFormattedTimeString: get_formatted_time_string_js_1.default,
    getInitials: get_initials_js_1.default,
    getLastDayOfMonthDate: get_last_day_of_month_date_js_1.default,
    getMonthDiff: get_month_diff_js_1.default,
    getOrdinalSuffix: get_ordinal_suffix_js_1.default,
    getPaginationParameters: get_pagination_parameters_js_1.default,
    getShortTextDate: get_short_text_date_js_1.default,
    getShortTextDayMonthOptionalyear: get_short_text_day_month_optionalyear_js_1.default,
    getStartOfDayDate: get_start_of_day_date_js_1.default,
    isString: is_string_js_1.default,
    isValidEmail: is_valid_email_js_1.default,
    isWeekend: is_weekend_js_1.default,
    normalizePhoneNumber: normalize_phone_number_js_1.default,
    percentageChange: percentage_change_js_1.default,
    roundOff2Dp: round_off_2_dp_js_1.default,
    slugify: slugify_js_1.default,
    splitCompoundString: split_compound_string_js_1.default,
    textSubtract: text_subtract_js_1.default,
    toMinorUnits: to_minor_units_js_1.default,
    toTitleCase: to_title_case_js_1.default,
    trimAndLowercase: trim_and_lowercase_js_1.default,
    trimAndUppercase: trim_and_uppercase_js_1.default,
    truncate: truncate_js_1.default,
};
