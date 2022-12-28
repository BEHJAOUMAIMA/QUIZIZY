let quizData = [{
        id: 1,
        question: "Why is AWS more economical than traditional data centers for applications with varying compute workloads ? ",
        answer_1: "Amazon EC2 costs are billed on a monthly basis. ",
        answer_2: "Users retain full administrative access to their Amazon EC2 instances.",
        answer_3: "Amazon EC2 instances can be launched on demand when needed.",
        answer_4: "Users can permanently run enough instances to handle peak workloads.",
        right_answer: "Amazon EC2 instances can be launched on demand when needed.",
        justification: "The ability to launch instances on demand when needed allows users to launch and terminate instances inresponse to a varying workload. This is a more economical practice than purchasing enough on-premises servers to handle the peak load."
    },
    {
        id: 2,
        question: "Which AWS service would simplify the migration of a database to AWS ? ",
        answer_1: "AWS Storage Gateway",
        answer_2: "AWS Database Migration Service(AWS DMS)",
        answer_3: "Amazon EC2 ",
        answer_4: "Amazon AppStream 2.0",
        right_answer: "AWS Database Migration Service(AWS DMS)",
        justification: "AWS DMS helps users migrate databases to AWS quickly and securely. The source database remains fully operational during the migration, minimizing downtime to applications that rely on the database. AWS DMS can migrate data to and from most widely used commercial and open-source databases"
    },
    {
        id: 3,
        question: "Which AWS offering enables users to find, buy, and immediately start using software solutions in their AWS environment?",
        answer_1: "AWS Config",
        answer_2: "AWS OpsWorks",
        answer_3: "AWS SDK",
        answer_4: "AWS Marketplace",
        right_answer: "AWS Marketplace",
        justification: "AWS Marketplace is a digital catalog with thousands of software listings from independent software vendors that makes it easy to find, test, buy, and deploy software that runs on AWS."
    },
    {
        id: 4,
        question: "Which AWS networking service enables a company to create a virtual network within AWS?",
        answer_1: "AWS Config",
        answer_2: "Amazon Route 53 ",
        answer_3: "AWS Direct Connect ",
        answer_4: "Amazon Virtual Private Cloud(Amazon VPC)",
        right_answer: "Amazon Virtual Private Cloud(Amazon VPC)",
        justification: "Amazon VPC lets users provision a logically isolated section of the AWS Cloud where users can launch AWS resources in a virtual network that they define."
    },
    {
        id: 5,
        question: "Which of the following is an AWS responsibility under the AWS shared responsibility model?",
        answer_1: "Configuring third-party applications",
        answer_2: "Maintaining physical hardware",
        answer_3: "Securing application access and data",
        answer_4: "Managing guest operating systems",
        right_answer: "Maintaining physical hardware",
        justification: "Maintaining physical hardware is an AWS responsibility under the AWS shared responsibility model."
    },
    {
        id: 6,
        question: "Which component of the AWS global infrastructure does Amazon CloudFront use to ensure low-latency delivery?",
        answer_1: "AWS Regions",
        answer_2: "Edge locations ",
        answer_3: "Availability Zones",
        answer_4: "Virtual Private Cloud (VPC)",
        right_answer: "Edge locations",
        justification: "To deliver content to users with lower latency, Amazon CloudFront uses a global network of points of presence (edge locations and regional edge caches) worldwide"
    },
    {
        id: 7,
        question: "How would a system administrator add an additional layer of login security to a user's AWS Management Console?",
        answer_1: "Use Amazon Cloud Directory",
        answer_2: "Audit AWS Identity and Access Management (IAM) roles",
        answer_3: "Enable multi-factor authentication",
        answer_4: "Enable AWS CloudTrail",
        right_answer: "Enable multi-factor authentication",
        justification: "Multi-factor authentication (MFA) is a simple best practice that adds an extra layer of protection on top of a username and password. With MFA enabled, when a user signs in to an AWS Management Console, they will be prompted for their username and password (the first factor—what they know), as well as for an authentication code from their MFA device (the second factor—what they have). Taken together, these multiple factors provide increased security for AWS account settings and resources."
    },
    {
        id: 8,
        question: "Which service can identify the user that made the API call when an Amazon EC2 instance is terminated?",
        answer_1: "AWS Trusted Advisor",
        answer_2: "AWS CloudTrail",
        answer_3: "AWS X-Ray",
        answer_4: "AWS Identity and Access Management (AWS IAM)",
        right_answer: "AWS CloudTrail",
        justification: "AWS CloudTrail helps users enable governance, compliance, and operational and risk auditing of their AWS accounts. Actions taken by a user, role, or an AWS service are recorded as events in CloudTrail. Events include actions taken in the AWS Management Console, AWS Command Line Interface (CLI), and AWS SDKs and APIs."
    },
    {
        id: 9,
        question: "Which service would be used to send alerts based on Amazon CloudWatch alarms?",
        answer_1: "Amazon Simple Notification Service (Amazon SNS)",
        answer_2: "AWS CloudTrail",
        answer_3: "AWS Trusted Advisor",
        answer_4: "Amazon Route 53",
        right_answer: "Amazon Simple Notification Service (Amazon SNS)",
        justification: "Amazon SNS and Amazon CloudWatch are integrated so users can collect, view, and analyze metrics for every active SNS. Once users have configured CloudWatch for Amazon SNS, they can gain better insight into the performance of their Amazon SNS topics, push notifications, and SMS deliveries."
    },
    {
        id: 10,
        question: "Where can a user find information about prohibited actions on the AWS infrastructure?",
        answer_1: "AWS Trusted Advisor",
        answer_2: "AWS Identity and Access Management (IAM)",
        answer_3: "AWS Billing Console",
        answer_4: "AWS Acceptable Use Policy",
        right_answer: "AWS Acceptable Use Policy",
        justification: "The AWS Acceptable Use Policy provides information regarding prohibited actions on the AWS infrastructure."
    }
]