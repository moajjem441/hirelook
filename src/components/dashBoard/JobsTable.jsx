'use client';

import { Button } from "@heroui/react";
import { Table, Chip } from "@heroui/react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

export default function JobsTable({ jobs }) {



    console.log("Jobs", jobs)

    return (
        <Table>
            <Table.ScrollContainer>
                <Table.Content aria-label="Company jobs" className="min-w-[600px]">
                    <Table.Header>
                        <Table.Column isRowHeader>JOB TITLE</Table.Column>
                        <Table.Column>CATEGORY</Table.Column>
                        <Table.Column>TYPE</Table.Column>
                        <Table.Column>STATUS</Table.Column>
                        <Table.Column>ACTION</Table.Column>
                    </Table.Header>
                    <Table.Body>
                        {jobs.map((job) => (
                            <Table.Row key={job._id}>
                                <Table.Cell className="font-medium">{job.title}</Table.Cell>
                                <Table.Cell className="capitalize">{job.category}</Table.Cell>
                                <Table.Cell>
                                    {job.type.toUpperCase()}

                                </Table.Cell>

                                <Table.Cell>
                                    <Chip
                                        color={job.status === "active" ? "success" : "warning"}
                                        variant="flat"
                                    >
                                        {job.status}
                                    </Chip>
                                </Table.Cell>

                                <Table.Cell>
                                    <div className="flex gap-2">
                                        <Button isIconOnly size="sm" color="primary" variant="light"  className="text-green-500">
                                            <FaEye />
                                        </Button>

                                        <Button isIconOnly size="sm" color="success" variant="light"  className="text-green-500">
                                            <FaEdit />
                                        </Button>

                                        <Button isIconOnly size="sm" color="danger" variant="light" className="text-red-500">
                                            <FaTrash />
                                        </Button>
                                    </div>
                                </Table.Cell>

                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Content>
            </Table.ScrollContainer>
        </Table>
    );
}