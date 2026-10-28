'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Download, Trash2 } from 'lucide-react';
import { useState } from 'react';

const categories = [
    'Beach',
    'Mountain',
    'City',
    'Adventure',
    'Cultural',
    'Wildlife',
];

export default function AddDestinationPage() {
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formError, setFormError] = useState('');
  
    const [form, setForm] = useState({
        destination: '',
        country: '',
        category: '',
        price: '',
        duration: '',
        departureDate: '',
        imageUrl: '',
        description: '',
    });

    const update = (field: string, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }));
        setErrors((prev) => ({ ...prev, [field]: '' }));
        
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrors({});
        setFormError('');

        const { description, imageUrl, ...rest } = form;
        const body = {
            ...rest,
            price: Number(form.price),
            ...(imageUrl.trim() ? { imageUrl: imageUrl.trim() } : {}),
            ...(description.trim() ? { description: description.trim() } : {}),
        };

        console.log(body);
        try {
            const res = await fetch('http://localhost:4000/travels', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });
          const data = await res.json();
          if (!res.ok) {
              if (Array.isArray(data.errors)) {
                  const fieldErrors: Record<string, string> = {};
                  for (const err of data.errors) {
                      if (!fieldErrors[err.field])
                          fieldErrors[err.field] = err.message;
                  }
                  setErrors(fieldErrors);
              } else {
                  setFormError(data.message ?? 'Something is wrong!');
              }
              return;
          }
            console.log('status: ', res.status, 'data:', data);
        } catch{
            setFormError('Connection failed with server! Try again!');
        }
    };

    const fieldClass =
        'bg-gray-100 border-transparent focus-visible:border-gray-300';

    return (
        <div className="bg-white px-6 py-16">
            <div className="mx-auto max-w-2xl">
                <h1 className="text-4xl pt-16 font-semibold tracking-tight text-gray-900">
                    Add New Travel Package
                </h1>

                <form
                    onSubmit={handleSubmit}
                    className="mt-12 rounded-xl border border-gray-200 bg-white p-8 shadow-sm"
                >
                    {/* Destination Name */}
                    <div className="space-y-1.5">
                        <Label
                            htmlFor="destination"
                            className="text-sm font-semibold text-gray-800"
                        >
                            Destination Name
                        </Label>
                        <Input
                            id="destination"
                            value={form.destination}
                            onChange={(e) =>
                                update('destination', e.target.value)
                            }
                            placeholder="Bali Paradise"
                            className={fieldClass}
                        />
                        {errors.destination && (
                            <p className="text-sm text-red-500">
                                {errors.destination}
                            </p>
                        )}
                    </div>

                    {/* Country + Category */}
                    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div className="space-y-1.5">
                            <Label
                                htmlFor="country"
                                className="text-sm font-semibold text-gray-800"
                            >
                                Country
                            </Label>
                            <Input
                                id="country"
                                value={form.country}
                                onChange={(e) =>
                                    update('country', e.target.value)
                                }
                                placeholder="Indonesia"
                                className={fieldClass}
                            />
                            {errors.country && (
                                <p className="text-sm text-red-500">
                                    {errors.country}
                                </p>
                            )}
                        </div>
                        <div className="space-y-1.5">
                            <Label className="text-sm font-semibold text-gray-800">
                                Category
                            </Label>
                            <Select
                                value={form.category}
                                onValueChange={(value) =>
                                    update('category', value ?? '')
                                }
                            >
                                <SelectTrigger
                                    className={`w-full h-9 ${fieldClass}`}
                                >
                                    <SelectValue placeholder="Beach" />
                                </SelectTrigger>
                                <SelectContent>
                                    {categories.map((cat) => (
                                        <SelectItem key={cat} value={cat}>
                                            {cat}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            {errors.category && (
                                <p className="text-sm text-red-500">
                                    {errors.category}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Price + Duration */}
                    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div className="space-y-1.5">
                            <Label
                                htmlFor="price"
                                className="text-sm font-semibold text-gray-800"
                            >
                                Price (USD)
                            </Label>
                            <Input
                                id="price"
                                value={form.price}
                                onChange={(e) =>
                                    update('price', e.target.value)
                                }
                                placeholder="e.g., 1299"
                                className={fieldClass}
                            />
                            {errors.price && (
                                <p className="text-sm text-red-500">
                                    {errors.price}
                                </p>
                            )}
                        </div>
                        <div className="space-y-1.5">
                            <Label
                                htmlFor="duration"
                                className="text-sm font-semibold text-gray-800"
                            >
                                Duration
                            </Label>
                            <Input
                                id="duration"
                                value={form.duration}
                                onChange={(e) =>
                                    update('duration', e.target.value)
                                }
                                placeholder="e.g., 7 Days/6 Nights"
                                className={fieldClass}
                            />
                            {errors.duration && (
                                <p className="text-sm text-red-500">
                                    {errors.duration}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Departure Date */}
                    <div className="mt-6 space-y-1.5">
                        <Label
                            htmlFor="departureDate"
                            className="text-sm font-semibold text-gray-800"
                        >
                            Departure Date
                        </Label>
                        <Input
                            id="departureDate"
                            type="date"
                            value={form.departureDate}
                            onChange={(e) =>
                                update('departureDate', e.target.value)
                            }
                            className={fieldClass}
                        />
                        {errors.departureDate && (
                            <p className="text-sm text-red-500">
                                {errors.departureDate}
                            </p>
                        )}
                    </div>

                    {/* Image URL */}
                    <div className="mt-6 space-y-1.5">
                        <Label
                            htmlFor="imageUrl"
                            className="text-sm font-semibold text-gray-800"
                        >
                            Image URL
                        </Label>
                        <Input
                            id="imageUrl"
                            value={form.imageUrl}
                            onChange={(e) => update('imageUrl', e.target.value)}
                            placeholder="https://example.com/image.jpg"
                            className={fieldClass}
                        />
                        {errors.imageUrl && (
                            <p className="text-sm text-red-500">
                                {errors.imageUrl}
                            </p>
                        )}
                    </div>

                    {/* Description */}
                    <div className="mt-6 space-y-1.5">
                        <Label
                            htmlFor="description"
                            className="text-sm font-semibold text-gray-800"
                        >
                            Description
                        </Label>
                        <Textarea
                            id="description"
                            rows={4}
                            value={form.description}
                            onChange={(e) =>
                                update('description', e.target.value)
                            }
                            placeholder="Describe the travel experience..."
                            className={`resize-none ${fieldClass}`}
                        />
                        {errors.description && (
                            <p className="text-sm text-red-500">
                                {errors.description}
                            </p>
                        )}
                    </div>

                    {/* Actions */}
                    <div className="mt-8 flex justify-end gap-3">
                        <Button
                            type="button"
                            variant="outline"
                            className="gap-2 border-red-300 bg-white text-red-500 hover:bg-red-50 hover:text-red-500"
                        >
                            <Trash2 className="h-4 w-4" />
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            className="gap-2 bg-[#15A1BF] text-white hover:bg-[#1189A3]"
                        >
                            <Download className="h-4 w-4" />
                            Add Travel Package
                        </Button>
                    </div>
                    {formError && (
                        <p className="mb-6 rounded-md bg-red-50 p-3 text-sm text-red-600">
                            {formError}
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
}
