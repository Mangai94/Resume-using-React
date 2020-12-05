const rootElement = document.getElementById('root');

const createNewDiv = (type, id, className, ...childern) => {
    return React.createElement(type, { id, className }, childern)
}

let headerTitle = createNewDiv('div', 'title', '', 'Mangayarkarasi J');

let address1 = createNewDiv('div', 'add1', '', 'Address Line1');
let resumeLink = createNewDiv('div', 'res', '', 'Prefer a resume building tool');
let headerAddress = createNewDiv('div', 'address', '', address1, resumeLink);

let phone = createNewDiv('div', 'phone', '', '0005-746783-9277 jmangai94@gmail.com');

let headerDiv = createNewDiv('div', "headerDiv", '', headerTitle, headerAddress, phone);
ReactDOM.render(headerDiv, rootElement);

let skillsList =
    [
        'DevelopmentofEnterpriselevelfullyfunctionalwebapplications',
        'Serversidedevelopment',
        'Processautomationtoreducethemanualefforts',
        'Codecleanuptoaddressmemoryleakandinefficientblocks',
        'Client side UI development'
    ]
const designation = <h4>HR-Manager and Operations Control</h4>;
const objective = <div>Objective
                    <div>
        To associate myself withan organization that provides a challenging job and an opportunity to
        prove my innovative skills through sincere and dedicated hardwork
                    </div>
</div>;

const skillsHeader = <h4>Skills</h4>

const skillsList = skillsList.map((skill) => <li key={skill}>{skill}</li>)

const bodyTemplate = () => {
    return (
        <div>
            <designation />
            <objective />
            <skillsHeader />
            <ul>
                <skillsList />
            </ul>
        </div>
    )
}

ReactDOM.render(bodyTemplate, rootElement);

