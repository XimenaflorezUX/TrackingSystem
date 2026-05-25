import FiltersContract from '../../assets/filters-contract.svg.js';
import FiltersDate from '../../assets/filters-date.svg.js';
import FiltersExperience from '../../assets/filters-experience.svg.js';
import FiltersInternship from '../../assets/filters-internship.svg.js';
import FiltersModality from '../../assets/filters-modality.svg.js';
import FiltersOthers from '../../assets/filters-others.svg.js';
import FiltersSalary from '../../assets/filters-salary.svg.js';
import FiltersSectors from '../../assets/filters-sectors.svg.js';

var iconMap = {
    sectors_ids: FiltersSectors,
    sector_id: FiltersSectors,
    categories_ids: FiltersSectors,
    category_id: FiltersSectors,
    salary_show: FiltersSalary,
    salary_min: FiltersSalary,
    salary_max: FiltersSalary,
    salary_range: FiltersSalary,
    compensation: FiltersSalary,
    experience_months_number: FiltersExperience,
    experience_years: FiltersExperience,
    experience_level: FiltersExperience,
    seniority_level: FiltersExperience,
    publish_date: FiltersDate,
    created_at: FiltersDate,
    deadline_date: FiltersDate,
    application_deadline: FiltersDate,
    contract_type_id: FiltersContract,
    employment_type: FiltersContract,
    job_type: FiltersContract,
    work_arrangement: FiltersContract,
    internship_types_id: FiltersInternship,
    education_level: FiltersInternship,
    degree_required: FiltersInternship,
    academic_level: FiltersInternship,
    location_ids: FiltersModality,
    city_id: FiltersModality,
    state_id: FiltersModality,
    country_id: FiltersModality,
    remote_work: FiltersModality,
    work_modality: FiltersModality,
    is_remote: FiltersModality,
    department_id: FiltersModality,
    company_size: FiltersModality,
    disabled_people: FiltersOthers,
    gender_preference: FiltersOthers,
    age_range: FiltersOthers,
    diversity: FiltersOthers,
    aditional_information: FiltersOthers,
    is_internal: FiltersOthers
};
var getFieldIconByPattern = function (field) {
    var fieldLower = field.toLowerCase();
    if (fieldLower.includes('salary') || fieldLower.includes('sueldo') || fieldLower.includes('salario')) {
        return FiltersSalary;
    }
    if (fieldLower.includes('experience') || fieldLower.includes('experiencia')) {
        return FiltersExperience;
    }
    if (fieldLower.includes('date') || fieldLower.includes('fecha')) {
        return FiltersDate;
    }
    if (fieldLower.includes('sector') || fieldLower.includes('category') || fieldLower.includes('categoria')) {
        return FiltersSectors;
    }
    if (fieldLower.includes('contract') || fieldLower.includes('contrato')) {
        return FiltersContract;
    }
    if (fieldLower.includes('internship') || fieldLower.includes('pasantia') || fieldLower.includes('education')) {
        return FiltersInternship;
    }
    if (fieldLower.includes('remote') || fieldLower.includes('modality') || fieldLower.includes('modalidad')) {
        return FiltersModality;
    }
    if (fieldLower.includes('people') || fieldLower.includes('person') || fieldLower.includes('gender')) {
        return FiltersOthers;
    }
    return FiltersOthers;
};
var getFieldIcon = function (field, providedIcon) {
    if (providedIcon)
        return providedIcon;
    if (iconMap[field])
        return iconMap[field];
    return getFieldIconByPattern(field);
};

export { getFieldIcon };
//# sourceMappingURL=iconMapping.utils.js.map
