## Really Basic CRM

#### A crm that is developed for entreprenurs who need a basic CRM with text replacment feature

### Story Behind this Repo

I work as a startup's co-founder, and I send a lot of messages in LinkedIn and I've this text that I have to replace some areas in it, also sometimes I forget to send followups. But available CRMs are too complex for my use case. And I couldn't find anything like I want so I decided to just a create a new one. And Here it's


### Install and Run

Git Clone this repo
`git clone https://github.com/DPLYR-dev/basic-crm/`

Install dependencies 
With NPM `npm i` or Yarn `yarn`

Run the project
`npm start`

### Deployment

#### You can use [DPLYR](https://www.dplyr.dev) to deploy this project in less than 5 minutes

### Config

You can config this project with the `config.json` file

To add a new text add an object with the `texts` array to replace speciefic areas of the text with the lead's info or with your info use our tag mergers

```javascript
${lead.name} 
${lead.company}
${lead.phone} 
${lead.email} 
${company.name} 
${company.url} 
${company.senderName} 
${company.senderEmail} 
${company.senderPhone} 
${company.calendly}
```

