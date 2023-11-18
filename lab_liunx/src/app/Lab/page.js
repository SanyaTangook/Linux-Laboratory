"use client";

import { Button } from "flowbite-react";
import { Table } from "flowbite-react";
import Link from "next/link";
import "./globals.css";

export default function Proflie() {
  return (
    <main>
      <div>
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Lab</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Start Lab</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Lab 1
              </Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>
                <div className="flex flex-wrap gap-2">
                  <Button color="success" pill>
                    <Link href="/terminal">Start Lab 1</Link>
                  </Button>
                </div>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Lab 2
              </Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>
                <div className="flex flex-wrap gap-2">
                  <Button color="success" pill>
                    <Link href="/terminal">Start Lab 2</Link>
                  </Button>
                </div>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Lab 3
              </Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>
                <div className="flex flex-wrap gap-2">
                  <Button color="success" pill>
                    <Link href="/terminal">Start Lab 3</Link>
                  </Button>
                </div>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Lab 4
              </Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>
                <div className="flex flex-wrap gap-2">
                  <Button color="success" pill>
                    <Link href="/terminal">Start Lab 4</Link>
                  </Button>
                </div>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Lab 5
              </Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>
                <div className="flex flex-wrap gap-2">
                  <Button color="success" pill>
                    <Link href="/terminal">Start Lab 5</Link>
                  </Button>
                </div>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Lab 6
              </Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>
                <div className="flex flex-wrap gap-2">
                  <Button color="success" pill>
                    <Link href="/terminal">Start Lab 6</Link>
                  </Button>
                </div>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Lab 7
              </Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>
                <div className="flex flex-wrap gap-2">
                  <Button color="success" pill>
                    <Link href="/terminal">Start Lab 7</Link>
                  </Button>
                </div>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Lab 8
              </Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>
                <div className="flex flex-wrap gap-2">
                  <Button color="success" pill>
                    <Link href="/terminal">Start Lab 8</Link>
                  </Button>
                </div>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </main>
  );
}
