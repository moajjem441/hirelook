'use client';

import { Table } from "@heroui/react";

export default function JobsTable({ jobs }) {
  const getStatusColor = (type) => {
    switch (type) {
      case "full": return "success";
      case "part": return "warning";
      case "internship": return "primary";
      default: return "default";
    }
  };

  return (
    <Table>
      <Table.ScrollContainer>
        <Table.Content aria-label="Company jobs" className="min-w-[600px]">
          <Table.Header>
            <Table.Column isRowHeader>JOB TITLE</Table.Column>
            <Table.Column>CATEGORY</Table.Column>
            <Table.Column>TYPE</Table.Column>
            <Table.Column>CURRENCY</Table.Column>
            <Table.Column>ACTION</Table.Column>
          </Table.Header>
          <Table.Body>
            {jobs.map((job) => (
              <Table.Row key={job._id}>
                <Table.Cell className="font-medium">{job.title}</Table.Cell>
                <Table.Cell className="capitalize">{job.category}</Table.Cell>
                <Table.Cell>
                  {/* You can still use Chip if you import it, but the example uses plain text. 
                      To keep Chip, import it and use as below. If you want pure example style, just text. 
                      I'll keep Chip because it's nicer. */}
                  <span className={`inline-block px-2 py-1 rounded text-xs font-semibold bg-${getStatusColor(job.type)}-100 text-${getStatusColor(job.type)}-800`}>
                    {job.type.toUpperCase()}
                  </span>
                </Table.Cell>
                <Table.Cell>{job.currency}</Table.Cell>
                <Table.Cell>
                  <button className="text-blue-400 hover:underline">View</button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
}