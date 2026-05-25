'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var filtersContract = require('../../assets/filters-contract.svg.js');
var filtersDate = require('../../assets/filters-date.svg.js');
var filtersExperience = require('../../assets/filters-experience.svg.js');
var filtersInternship = require('../../assets/filters-internship.svg.js');
var filtersModality = require('../../assets/filters-modality.svg.js');
var filtersOthers = require('../../assets/filters-others.svg.js');
var filtersSalary = require('../../assets/filters-salary.svg.js');
var filtersSectors = require('../../assets/filters-sectors.svg.js');

var iconMap = {
    sectors_ids: filtersSectors,
    sector_id: filtersSectors,
    categories_ids: filtersSectors,
    category_id: filtersSectors,
    salary_show: filtersSalary,
    salary_min: filtersSalary,
    salary_max: filtersSalary,
    salary_range: filtersSalary,
    compensation: filtersSalary,
    experience_months_number: filtersExperience,
    experience_years: filtersExperience,
    experience_level: filtersExperience,
    seniority_level: filtersExperience,
    publish_date: filtersDate,
    created_at: filtersDate,
    deadline_date: filtersDate,
    application_deadline: filtersDate,
    contract_type_id: filtersContract,
    employment_type: filtersContract,
    job_type: filtersContract,
    work_arrangement: filtersContract,
    internship_types_id: filtersInternship,
    education_level: filtersInternship,
    degree_required: filtersInternship,
    academic_level: filtersInternship,
    location_ids: filtersModality,
    city_id: filtersModality,
    state_id: filtersModality,
    country_id: filtersModality,
    remote_work: filtersModality,
    work_modality: filtersModality,
    is_remote: filtersModality,
    department_id: filtersModality,
    company_size: filtersModality,
    disabled_people: filtersOthers,
    gender_preference: filtersOthers,
    age_range: filtersOthers,
    diversity: filtersOthers,
    aditional_information: filtersOthers,
    is_internal: filtersOthers
};
var getFieldIconByPattern = function (field) {
    var fieldLower = field.toLowerCase();
    if (fieldLower.includes('salary') || fieldLower.includes('sueldo') || fieldLower.includes('salario')) {
        return filtersSalary;
    }
    if (fieldLower.includes('experience') || fieldLower.includes('experiencia')) {
        return filtersExperience;
    }
    if (fieldLower.includes('date') || fieldLower.includes('fecha')) {
        return filtersDate;
    }
    if (fieldLower.includes('sector') || fieldLower.includes('category') || fieldLower.includes('categoria')) {
        return filtersSectors;
    }
    if (fieldLower.includes('contract') || fieldLower.includes('contrato')) {
        return filtersContract;
    }
    if (fieldLower.includes('internship') || fieldLower.includes('pasantia') || fieldLower.includes('education')) {
        return filtersInternship;
    }
    if (fieldLower.includes('remote') || fieldLower.includes('modality') || fieldLower.includes('modalidad')) {
        return filtersModality;
    }
    if (fieldLower.includes('people') || fieldLower.includes('person') || fieldLower.includes('gender')) {
        return filtersOthers;
    }
    return filtersOthers;
};
var getFieldIcon = function (field, providedIcon) {
    if (providedIcon)
        return providedIcon;
    if (iconMap[field])
        return iconMap[field];
    return getFieldIconByPattern(field);
};

exports.getFieldIcon = getFieldIcon;
//# sourceMappingURL=iconMapping.utils.js.map
